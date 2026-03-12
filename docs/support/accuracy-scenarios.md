# TRACKS Attribution Accuracy Scenarios

TRACKS uses a Unified Marketing Measurement (UMM) approach that combines direct measurement with probabilistic modeling. Because PC and console storefronts sit outside the marketing measurement chain, fully deterministic attribution is not possible — players click ads on one device or network, but may install and open the game days later on a completely different setup.

This page explains how TRACKS handles these real-world situations, what confidence levels mean in practice, and how accurate the results are.

---

## How Confidence Levels Work

Every time a player opens a game for the first time, TRACKS attempts to match that event back to an ad interaction. The strength of that match is expressed as a **confidence level** — a percentage that reflects how certain TRACKS is about the attribution.

| Confidence Level | Range | What It Means |
| --- | --- | --- |
| **High** | above 80% | The ad click and game open happened on the same device and network within a short time frame. This is a near-certain match. |
| **Medium** | 65%–80% | The player journey involved a device or network change, but TRACKS found enough connecting signals (e.g., shared home network, website visits, geographic consistency) to link the events with strong probability. |
| **Low** | below 65% | There are not enough matching signals to confidently attribute the install. TRACKS labels these as **Direct** rather than risk a wrong attribution. |

TRACKS only reports an attributed install when confidence reaches at least **65%**. Everything below that threshold is reported as Direct — meaning the player is treated as if they found the game on their own, even though some of these players may have interacted with an ad.

---

## Real-World Scenarios

The following scenarios illustrate how TRACKS connects the dots across different devices, networks, and timeframes. These are based on common player journeys observed in PC and console game marketing.

### Scenario 1: Same Network, IP Refresh

**The player journey:**

1. A player clicks an ad while on their home Wi-Fi (public IP: A)
2. Within 1–3 days, the home router's IP address is renewed by the internet provider (public IP changes to B)
3. The player opens the game on their PlayStation, still on the same home network (now IP: B)

**How TRACKS connects the dots:**

Even though the IP address changed, TRACKS recognizes that both IPs belong to the same internet provider and are in a similar address range. Combined with matching geographic location, a coherent time window, and the absence of other players from that area during that period, the model links the ad click to the game open.

**Key matching signals:** Same internet provider, similar IP range, consistent geography, time window proximity, no competing candidates.

---

### Scenario 2: Mobile Ad Click, Different Region, Home Game Open

**The player journey:**

1. A player visits the game's website from home Wi-Fi (IP: A)
2. Days later, the same player clicks an ad on their phone while on a cellular network in a different region — the ad leads to the game's landing page
3. Later, the player returns home and opens the game on their PC via home Wi-Fi (IP: B — renewed since the first visit)

**How TRACKS connects the dots:**

The website visit from home created a cookie or visitor ID. When the player later clicked the ad on mobile and landed on the website again, TRACKS linked both sessions through that identifier. The home Wi-Fi visits (before and after the ad click) share the same internet provider and geographic area, and the time window is coherent. With no other plausible matches in that window, TRACKS attributes the install to the ad.

**Key matching signals:** Cookie/visitor ID continuity across sessions, device graph from prior home visit, same internet provider, geographic consistency, time window coherence.

---

### Scenario 3: Cross-Device Journey via Google Signals

**The player journey:**

1. A player clicks an ad on their phone (cellular network, different region) and lands on the game's website. Their mobile browser is signed into a Google service (YouTube, Gmail, Maps) with consent for Google Signals
2. Later, the player visits the game's website from their home PC (still linked via Google Signals) and clicks a "Play Now" button — a strong intent action
3. A couple of days later, the player opens the game on their PC from the same home network

**How TRACKS connects the dots:**

Google Signals ties the mobile and PC web sessions together through the player's Google account, establishing a cross-device link. The intent action on the website (clicking "Play Now") adds a strong behavioral signal. The home IP and geography are consistent between the PC web session and the game open, the time window is coherent, and there are no competing candidates on that home network.

**Key matching signals:** Google Signals cross-device association, strong intent event on website, home IP and geographic consistency, time proximity, no competing candidates.

---

## Practical Test: What Does This Look Like at Scale?

To illustrate how TRACKS performs in practice, consider a simulated test of **100 unique players** opening a game for the first time, with randomized real-world conditions — different channels, devices, click-to-install timeframes, storefronts, ad formats, and IP addresses.

### Setup

In this test, the **ground truth** is that **20 out of 100 installs were driven by Meta ads**. The remaining 80 were genuine organic installs.

### Results

| Category | Installs | How |
| --- | --- | --- |
| **High-confidence fingerprint matches** | 5 | Same device, same IP, installed within day 1 — near-certain matches |
| **Model-attributed at ≥65% confidence** | 13 | Cross-device or delayed installs where TRACKS found enough signals to attribute with confidence |
| **Total attributed to Meta** | ~18–20 | Combined measured + modeled estimate |
| **Unattributed (reported as Direct)** | Remainder | Journeys where matching or stitching was not feasible (e.g., long delays, VPN, public Wi-Fi, carrier network changes) |

### What This Means

TRACKS captured **5 installs with high confidence** through direct fingerprint matching — these are the "easy" cases where the ad click and game open happened on the same device and network.

The model then identified **13 additional installs** as likely Meta-driven, using the probabilistic signals described in the scenarios above. Each of these carries at least 65% confidence, meaning the true number could reasonably range from approximately 13 to 27 in a complex cross-device campaign.

The combined estimate of ~20 Meta-driven installs closely matches the actual ground truth of 20 — demonstrating that while individual attributions carry uncertainty, the **aggregate picture is accurate enough to make reliable budget and channel decisions**.

!!! tip "Key Takeaway"

    TRACKS may not pinpoint every single install with certainty, but it consistently delivers an accurate overall view of which channels are driving results. This is the core value of the UMM approach: **reliable marketing decisions based on quantified confidence, not guesswork**.

---

## Why Some Installs Can't Be Attributed

There are situations where no attribution method — including TRACKS — can confidently link an ad interaction to a game install:

- **Long delays** between the ad click and game open (e.g., weeks)
- **VPN or public Wi-Fi** usage that masks the player's real network identity
- **Carrier network changes** where the mobile IP has no relationship to the home IP
- **No web interaction** — the player saw or clicked an ad but went directly to the storefront without visiting the game's website, leaving no intermediate signal to match

In these cases, TRACKS reports the install as **Direct** rather than guessing. This conservative approach ensures that the data you do see in your dashboard is trustworthy and actionable.

!!! info "Further Reading"

    For a deeper technical overview of how TRACKS Attribution works, including integration details and methodology comparisons, visit the [Attribution Tracking](attribution.md) page in the Knowledge Base.
