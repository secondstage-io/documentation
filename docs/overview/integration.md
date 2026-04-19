# Integration Support

To integrate TRACKS, every user receives:

- A kickoff meeting with our team to walk through the integration process.

- A personalised integration plan tailored to their product and data flow.

These resources are designed to guide you through the setup steps described in this documentation page.

## Data Sources 

TRACKS using TRACKS Attribution consists of four primary data source components:

- Media Analytics – Integrations with media channels
- Web Integration – Incorporating the TRACKS JS code and Google Analytics 4
- Steamworks UTM Analytics and Traffic Breakdown
- TRACKS Attribution Measurement API
  
Media platforms, Google Analytics (via Google Tag Manager), and Steamworks integrate by providing access to our service account. However, the TRACKS Attribution Measurement API must be deployed into your Google Cloud Platform (GCP) account (a new account will be created if one doesn't exist).

The TRACKS Attribution data source collects granular data for each web visit and game open event. This data is funneled into the partitioned tracks_attribution dataset. More information regarding data retention, GDPR compliance, and the Data Processing Agreement is available in the [Data Handling & Security](../support/datasecurity.md) section.

Once the ELT (Extract-Load-Transform) pipeline is deployed, all data sources will be consolidated into a Google Cloud BigQuery database.

<figure markdown="span">
  ![TRACKS integration — data source flow](../assets/attribution_flow-1.png)
  <figcaption>Data flow — media analytics, web, Steamworks, and Measurement API into BigQuery</figcaption>
</figure>


## Integration Overview

!!! info "Before you start"

    The TRACKS Attribution integration assumes three things are in place. Second Stage helps set each one up — but knowing the scope up front avoids surprises:

    - **A Google Cloud Platform project** that will host the TRACKS backend services ([Cloud Setup](../platform/cloud.md)).
    - **A telemetry backend server** capable of logging game-open events and reaching the public internet ([Telemetry Setup](../attribution/telemetry.md)).
    - **Access to your Google Tag Manager and media-platform accounts** so TRACKS can deploy the web snippet and pull campaign data ([Landing Page Integration](../platform/landingpages.md) and [Media Platform Access](../platform/mediachannels/index.md)).

**Integration TRACKS Attribution**

The Second Stage team will assist in setting up a Google Cloud Platform (GCP) project for deployment on your side. If you already have an existing GCP account, start by creating a new project and grant Project Owner access to analytics@secondstage.io.

Once deployment is complete, the TRACKS Measurement API will be available for connection to your telemetry backend server.

Next, install Google Tag Manager on your website. Using the editor access provided to analytics@secondstage.io, a JavaScript snippet will be deployed to track web visits through the Attribution Measurement API, capturing the first touchpoint with acquisition source data.

The TRACKS attribution solution will then be ready to collect both web and in-game events, reporting attribution metrics in the reporting suite. Ensure that campaign naming conventions and UTM taxonomies are properly implemented as outlined in your ad operations guide.

**Integrations Marketing Analytic**

The TRACKS data automation backend integrates seamlessly with various media platforms, starting with access to our service account at analytics@secondstage.io. 

1. Users begin by giving access to their media platforms and completing the ad ops helper sheet provided by Second Stage.
2. Based on the information supplied, TRACKS generates UTM-tagged URLs, allowing media specialists to deploy these URLs across ad platforms and configure campaign names, ad groups, and creative assets.
3. The user then inputs this information into the media platforms. Once the campaign is live, TRACKS will notify you, and the data will be available in the reporting suite the following day.
4. By integrating with Google Tag Manager, GA4, and Steamworks, TRACKS also implements a JavaScript snippet on the landing page to enable attribution session tracking and capture Steam page click-throughs. This step also includes setting up event and conversion pixels for the media platforms.
5. To configure postbacks—such as sending signals for game_open, install, and other in-game events back to media platforms—a system user is assigned to your account. Editor-level access to the Events Manager or Events Builder on the media platforms is required for this.

## Deployment

!!! tip "Important:"

    Required for Measured Attribution Tracking and Measured Attribution Tracking + Modeling. If you only plan to use Modeled Attribution Tracking, please refer to Web (Landing Page) Setup in the Marketing Analytics section.

The deployment approach for TRACKS is a "hybrid-hosted" solution, similar to an on-premise setup, where all granular data is processed and stored on the publisher or developer studio’s Google Cloud servers. This method can be considered as an enterprise level solution, and we are of the opinion that it is the optimal choice for the video game industry.
This approach has been streamlined by the Second Stage team to maximize the effectiveness of performance media campaigns in gaming, without introducing latency or errors to game servers. It also ensures maximum data privacy and safeguards player data.

<figure markdown="span">
  ![TRACKS deployment topology](../assets/attribution_deployment-1.png)
  <figcaption>Hybrid-hosted deployment — all granular data processes on your Google Cloud</figcaption>
</figure>

We do not recommend integrating the attribution measurement solution if your game does not have a backend server for telemetry and event logging—whether currently in place or planned. In this case, our team can assist you in setting up a suitable telemetry solution for Unity or Unreal Engine.
Also, if you do have a telemetry backend server but are unable to use Google Cloud Platform for deployment, the Second Stage team can assist by hosting the attribution solution in a dedicated cloud environment for you.

## Branded Domains

Once the TRACKS backend is deployed in your Google Cloud Platform instance, you'll have the option to whitelabel the Measurement API endpoint domain. This feature is not only for branding purposes but also provides greater control over privacy and compliance with client-side CORS (Cross-Origin Resource Sharing) policies.

## What Second Stage provides during integration

During integration, Second Stage sets up and manages the following on your behalf so your team always knows what to expect:

- **A personalized Integration Plan** — a live roadmap covering every setup task across attribution, media, and operations. For each task you'll see:
    - **Task name**: what needs to be done
    - **Status**: live progress
    - **Owner**: who's responsible (your side or ours)
    - **Category & section**: where the task fits in the overall setup
    - **Due date**: when it's expected to be completed
    - **Notes**: additional context or links
- **Email notifications** when key milestones are completed.
- **A shared Discord group** with all stakeholders (optional).
- **Scheduled support meetings** — you can book time with the TRACKS team at any point during the integration.

This gives your technical and marketing teams full visibility and coordination throughout.

## Customer Support

Second Stage offers customer support through email or our contact form from Monday to Friday, excluding public holidays in Berlin. Customer support is provided from 9:00 a.m. to 6:00 p.m. (CET) at Second Stage business hours. Second Stage will respond by email within 24 hours.
