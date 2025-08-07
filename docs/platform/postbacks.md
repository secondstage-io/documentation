# Postbacks 

## Overview 

Postbacks are HTTP requests, typically GET or POST, sent to external servers. TRACKS can transmit installation and in-game event data back to advertising channels using a click ID as the key identifier. This enables platforms like Meta, Google, X, TikTok, and Reddit to identify users with similar behaviors. Instead of focusing solely on clicks, it's more effective to send postbacks for installs and in-game events to optimize campaign performance.

The click ID, collected on the landing page via the TRACKS JavaScript snippet after an ad click, is the only identifier passed along with event data to these advertising channels.

Most media platforms offer an Event/Conversion API module designed for developers. TRACKS' backend can integrate with these platforms' Conversion APIs to post back in-game events, such as installs, that match the click ID collected during attribution. Enabling postbacks closes the loop on tracking and targeting, enhancing media platforms' algorithms to optimize for valuable in-game conversions rather than just ad clicks, engagements, or web conversions. This is particularly beneficial for performance marketing campaigns focused on conversion objectives.

However, for campaigns with objectives such as driving traffic, optimizing for web conversions may be more advantageous, as these occur earlier in the user journey.

Below is an example postback guide template for mapping the Conversion API for various platforms. By utilizing the access provided for media platforms, TRACKS can automatically deploy each platform’s Conversion API from its backend. The TRACKS postback solution can be activated simply by granting editor access for the Events/Dataset management of the media platform.

This one-time setup for each media platform allows TRACKS to implement the Conversion API for your ad accounts without consuming developer resources or relying on third-party solutions like Customer Data Platforms (CDPs).

![Postbacks](/assets/attribution_postbacks.png)

## Meta Conversion API Guide

[→ Conversions API Setup Guide for Meta](https://www.facebook.com/business/help/232481544843294?id=818859032317965)

Editor access for the Data Source Asset to analytics@secondstage.io is required.

To set up a Meta Postback Token, follow these steps using a Business Manager Admin login:

1. In Meta Business Manager, navigate to Data Sources. If you haven’t already, create a new data source.
2. Go to the Settings tab of your data source and note down the Data Set ID.
3. Scroll down to the Conversion API section.
4. Click Generate Access Token. Copy the token and send it to the Second Stage team to enable Meta install postbacks.

Once complete, ensure the data source asset is shared with the active Ad Account so your campaigns can access and utilize the data.

![Meta Capi 1](/assets/Meta_capi_doc1.png)

![Meta Capi 2](/assets/Meta_capi_doc2.png)

![Meta Capi 3](/assets/Meta_capi_doc3.png)

## Google Conversion API Guide

[→ Conversions API Setup Guide for Google](https://developers.google.com/google-ads/api/docs/get-started/dev-token)

A manager account (MCC) is needed to enable Conversion API for Google ads. Follow the guide above to activate your API (Apply for access to the Google Ads API). 
Share the developer token from the “API Center” after you complete your API access process.

## TikTok Conversion API Guide

[→ Conversions API Setup Guide for TikTok](https://business-api.tiktok.com/portal/docs?id=1738855176671234)

TikTok business developers account is needed for the Conversion API. Follow registration steps by choosing “Direct Advertiser”. After your developer profile is approved, inform your Second Stage contact to handle creating the [Business App](https://business-api.tiktok.com/portal/docs?id=1738855242728450) and configuring the [Web Events API](https://business-api.tiktok.com/portal/docs?id=1739584855420929). 

## Reddit Conversion API Guide

[→ Conversions API Setup Guide for TikTok](https://business.reddithelp.com/helpcenter/s/article/Conversions-API)

Reddit access given prior would be sufficient for TRACKS to activate Conversion API for Reddit. Developer access token can be created through Reddit Events Manager.

For your reference Reddit’s documentation that are required for CAPI listed here: 

[→ Reddit Conversion Access Token](https://business.reddithelp.com/helpcenter/s/article/conversion-access-token)

[→ Conversions API Setup Guide for Reddit](https://business.reddithelp.com/helpcenter/s/article/using-the-API-for-conversions)

## X Ads Conversion API Guide

Use your company Twitter handle to create a developer account and apply to have Ads API access. 

Sign up for Developer Access [here](https://developer.twitter.com/en/portal/petition/essential/basic-info) (select free). Then send a request for Conversions Only Access. Once approved, inform your Second Stage contact to deploy X Ads CAPI for TRACKS.  

[→ Conversions API Setup Guide for X](https://developer.x.com/en/docs/x-ads-api/measurement/web-conversions/conversion-api)
