# Landing Page Integration

## Overview

!!! tip "Important:"

    Required for Modeled Attribution Tracking, Measured Attribution Tracking, Measured Attribution Tracking + Modeling.
    By linking TRACKS with Steamworks, Google Analytics 4 and Google Tag Manager access, you will be able to use the Modeled Installs reporting feature. Please note that postbacks only work if you are using the Measured Attribution Tracking or Measured Attribution Tracking + Modeling solution. 

By embedding the TRACKS JavaScript code into your landing page, minimal technical data — such as IP address and user-agent — is passively collected as part of the standard HTTP request. No cookies, LocalStorage, or other client-side storage mechanisms are used. This data is pseudonymized (e.g., through salted hashing of IP addresses), retained temporarily (e.g., for 30 days), and only becomes relevant when the second measurement point is triggered. Any actual fingerprinting or attribution is based on the combination of both signals, with consent requirements potentially applying at that later stage, depending on the implementation and legal basis selected by the data controller.

To ensure accurate attribution when using your website as the attribution source, it’s important to correctly implement UTM tagging in your paid media or content creator campaigns. We recommend using the TRACKS UTM builder sheet to properly generate tracking links for your landing page (please refer to Marketing Analytics > Setup for more information).

![Landingpage](/assets/attribution_landingpage.png)

An additional benefit of using your landing page with the TRACKS JavaScript snippet is the ability to track not only paid media, but also web referrals and organic traffic. This means that even without running paid media ads, you can still monitor and report on installs generated from organic referral sources. We also recommend applying UTM tagging to your owned media, such as CRM emails and social media, to further expand your attributed install data.

In addition, the TRACKS JavaScript code automatically applies UTM parameters to your outbound storefront links. When a visitor with a defined acquisition source, medium, or referral clicks on the storefront buttons and navigates to platforms like Steam, the UTM information is captured and transferred to the storefront page. This allows for seamless integration between Google Analytics and Steamworks Analytics, providing a comprehensive view of your traffic sources.

Implementation of the TRACKS JavaScript code is managed by the Second Stage team and requires access to Google Tag Manager as described below. If you do not already have Google Tag Manager installed on your landing page, we can help you integrate it.

By providing access to Google Tag Manager, we will be able to configure the following:

- **Google Analytics 4 (GA4) for website conversion measurement and identifying session/visit sources:**
    TRACKS integrates with GA4 to capture a session's acquisition source and access multi-channel funnel data. As mentioned in the features section, TRACKS also uses web conversions as a key source of behavioral data that is included in the reporting suite as web conversion metrics.
If GA4 is not already set up on your site, provide us with access to Google Tag Manager at analytics@secondstage.io and we will create and configure it for you. If GA4 is already installed, granting access will enable us to audit and optimize your analytics setup for your marketing campaigns.

- **Media platform web pixel tagging**: 
    By granting Google Tag Manager and media platform access to analytics@secondstage.io, TRACKS can set up a web conversion event or pixel if one is not already in place. You can use this event to optimize your media platform campaigns in addition to Install Postbacks. Since web conversion events provide valuable insights into user behavior, it’s recommended to include them in your conversion objective campaigns. When used alongside the Installs (game_opens) event, this creates an optimized conversion funnel, helping you achieve the best possible campaign performance.

Here is an example of source code for your reference:

??? abstract "Pseudo-code example"
    ```json
    <script>
    // TRACKS by Second STAGE Web Snippet
    (function (A, S, D, F, W, E) {
     (A.tracks =
       A.tracks ||
       function () {
         (A.tracks.q = A.tracks.q || []).push(arguments);
       }),
       (A.tracks.q = []),
       (A.tracks.r = 1 * new Date());
     (W = S.createElement(D)), (E = S.getElementsByTagName(D)[0]);
     W.async = 1;
     W.src = F;
     E.parentNode.insertBefore(W, E);
    })(window, document, "script", "https://cdn.tracks-2s.com/collect.js");
    tracks("page_view", "2S-XXXXXX");
    </script>
    ```

Each game will be assigned a unique token to replace "2S-XXXXX." After granting Google Tag Manager access, you'll be able to see the TRACKS JavaScript snippet deployed in your GTM container.

*Example*

![GTM Web Snippet](/assets/attribution_gtmwebsnippet.png)

![GTM Web Snippet](/assets/attribution_datasources.png)

## Google Tag Manager Integration & Access

In Google Tag Manager, please grant Publish access to analytics@secondstage.io. TRACKS will implement events and conversion pixels on your website to optimize landing page interactions and improve media platform targeting algorithms, as detailed above.

For guidance on installing GTM, refer to the documentation [here](https://support.google.com/tagmanager/answer/14842164).
Below is an sample image of the Google Tag Manager integration code that needs to be implemented on your landing page. 

![Google Tag Manager Setup](/assets/marketing-analytics_gtm.png "Google Tag Manager Setup")

## Google Analytics Integration & Access

In Google Analytics (GA4), please grant Editor access to analytics@secondstage.io. For guidance on creating a GA4 account, refer to the documentation [here](https://support.google.com/analytics/answer/9304153). Alternatively, the Second Stage team can create one for you if needed.

![Google Analytics Integration](/assets/marketinganalytics_g4access-1.png "Google Analytics Setup")

![Google Analytics Integration](/assets/marketinganalytics_g4access-2.png "Google Analytics Setup")

