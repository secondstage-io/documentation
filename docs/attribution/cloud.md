# Google Cloud Platform (GCP) Environment Set Up

1. Go to [Google Cloud Console](https://console.cloud.google.com/), sign in with your email address. Create a new Project named "TRACKS - yourgame" (replace "yourgame" with the title or a unique identifier of your game, e.g. "TRACKS - Urban Brawl").
If your organization does not use Google Workspace (Gsuite email account), you can link your email following these steps: https://support.google.com/accounts/answer/27441)

![Google Cloud Access](/assets/attribution_GCP.png)

2. [Enable billing for your account and link to your Project](https://cloud.google.com/billing/docs/how-to/modify-project#how-to-change-ba)
    - Microservices enabled in your Google Cloud will autoscale depending on data ingestion volume.
    - Estimated costs for 2 million installs in a single month should be around ~$40.
3. Go to IAM and admin, click on Grant Access, select permission: Basic -> Owner for analytics@secondstage.io
4. The Second Stage team will be notified after access is granted and TRACKS Attribution Measurement microservices are deployed for your instance.
5. [Your API key and secret will be entered as environment variables to Google Cloud Run functions](https://cloud.google.com/functions/docs/configuring/env-var) 
