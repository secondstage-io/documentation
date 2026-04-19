/**
 * TRACKS Documentation — enhancements
 *  1. Helpscout Beacon (idempotent under navigation.instant)
 *  2. Tab mega-menu dropdowns (populated from the sidebar nav tree)
 *  3. TOC "you are here" scroll-spy indicator
 */

/* ---------------------------------------------------------------------------
   1. Helpscout Beacon loader
--------------------------------------------------------------------------- */
(function () {
  const BEACON_SRC = 'https://beacon-v2.helpscout.net';
  const BEACON_ID = 'bf550169-3b5a-42e7-a929-195260e086e5';

  if (window.__tracksBeaconInitialized) return;
  window.__tracksBeaconInitialized = true;

  if (!window.Beacon) {
    window.Beacon = function (method, options, data) {
      (window.Beacon.readyQueue = window.Beacon.readyQueue || []).push({
        method: method,
        options: options,
        data: data,
      });
    };
    window.Beacon.readyQueue = [];
  }

  if (!document.querySelector(`script[src="${BEACON_SRC}"]`)) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = BEACON_SRC;
    document.head.appendChild(s);
  }

  window.Beacon('init', BEACON_ID);
})();

/* ---------------------------------------------------------------------------
   2. Tab mega-menu dropdowns
   For each top tab, clone its sibling section's child pages from the sidebar
   into a hover-dropdown panel. Tabs without a matching section are skipped.
--------------------------------------------------------------------------- */
function tracksBuildTabDropdowns() {
  const tabItems = document.querySelectorAll('.md-tabs__item');
  const primaryList = document.querySelector('.md-nav--primary > .md-nav__list');
  if (!tabItems.length || !primaryList) return;

  const sectionItems = Array.from(
    primaryList.querySelectorAll(':scope > .md-nav__item--section')
  );

  tabItems.forEach((tab) => {
    // Skip if we've already built a dropdown for this tab
    if (tab.querySelector(':scope > .tracks-tab-dropdown')) return;

    const tabLink = tab.querySelector(':scope > .md-tabs__link');
    if (!tabLink) return;
    const tabLabel = tabLink.textContent.trim();

    // Match section by its label text
    const section = sectionItems.find((s) => {
      const label = s.querySelector(':scope > label.md-nav__link .md-ellipsis');
      return label && label.textContent.trim() === tabLabel;
    });
    if (!section) return;

    // Collect first-level child <a> links
    const links = Array.from(
      section.querySelectorAll(
        ':scope > nav.md-nav > ul.md-nav__list > li.md-nav__item > a.md-nav__link'
      )
    );
    if (links.length === 0) return;

    const dropdown = document.createElement('div');
    dropdown.className = 'tracks-tab-dropdown';
    dropdown.setAttribute('role', 'menu');

    links.forEach((src) => {
      const label = (src.querySelector('.md-ellipsis') || src).textContent.trim();
      if (!label) return;
      const a = document.createElement('a');
      a.href = src.href;
      a.textContent = label;
      a.setAttribute('role', 'menuitem');
      dropdown.appendChild(a);
    });

    tab.appendChild(dropdown);
  });
}

/* ---------------------------------------------------------------------------
   3. "Was this page helpful?" feedback widget
   Yes → "Thanks — that's logged." (stored in localStorage for basic metrics)
   No  → offers a one-click open of the Helpscout Beacon with page context.
--------------------------------------------------------------------------- */
function tracksFeedback() {
  const widget = document.querySelector('.tracks-feedback');
  if (!widget || widget.dataset.tracksWired) return;
  widget.dataset.tracksWired = '1';

  const actions = widget.querySelector('.tracks-feedback__actions');
  const thanks = widget.querySelector('.tracks-feedback__thanks');
  const followup = widget.querySelector('.tracks-feedback__followup');
  const contactLink = widget.querySelector('[data-tracks-feedback-contact]');
  const pageTitle = widget.dataset.pageTitle || document.title;
  const pageUrl = window.location.pathname;

  const record = (rating) => {
    try {
      const key = 'tracksFeedback';
      const log = JSON.parse(localStorage.getItem(key) || '[]');
      log.push({ rating, pageTitle, pageUrl, t: Date.now() });
      localStorage.setItem(key, JSON.stringify(log.slice(-50)));
    } catch (_) { /* private mode — ignore */ }
  };

  widget.querySelectorAll('[data-tracks-feedback]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const rating = btn.getAttribute('data-tracks-feedback');
      record(rating);
      actions.hidden = true;
      if (rating === 'yes') {
        thanks.hidden = false;
      } else {
        followup.hidden = false;
      }
    });
  });

  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof window.Beacon === 'function') {
        window.Beacon('prefill', {
          subject: `Docs feedback: ${pageTitle}`,
          text: `I found the page "${pageTitle}" (${pageUrl}) unhelpful. Specifically:\n\n`,
        });
        window.Beacon('open');
      } else {
        window.location.href = 'https://secondstage.io/contact/';
      }
    });
  }
}

/* ---------------------------------------------------------------------------
   Wire setup into page lifecycle — runs on first load AND on every
   navigation.instant page transition via Material's document$ observable.
--------------------------------------------------------------------------- */
function tracksSetup() {
  tracksBuildTabDropdowns();
  tracksFeedback();
}

if (window.document$ && typeof window.document$.subscribe === 'function') {
  window.document$.subscribe(() => tracksSetup());
} else {
  document.addEventListener('DOMContentLoaded', tracksSetup);
}
