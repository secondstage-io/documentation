# TRACKS Attribution Measurement API

!!! tip "Important:"

    Required for Measured Attribution Tracking and Measured Attribution Tracking + Modeling. If you only plan to use Modeled Attribution Tracking, please refer to Web (Landing Page) Setup in the Marketing Analytics section.

The Measurement API tracks the customer acquisition source, enabling you to identify which channels, campaigns, ads drive install and other in-game events. By integrating with TRACKS Attribution, you can accurately attribute conversions to the correct media sources, helping you optimize your marketing efforts.

## Prerequisites

Before you begin, please ensure the following:

- A Google Cloud Platform account with billing enabled (Google Cloud Platform microservices will auto-scale as needed for your game).
- Access to Measurement API credentials (API key and secret).
- A TRACKS account with the attribution package enabled and ready for integration.
- Basic knowledge of server-side programming, cloud services, and API integrations.
- A telemetry server capable of reading and collecting client IPs via HTTP headers or X-Forwarded-For (XFF).
- A webhook, postback, or proxy mechanism that can trigger real-time Measurement API requests or perform batch uploads via cron jobs.

To integrate with TRACKS Attribution, you'll need to create and implement a lightweight server-side HTTP request as a webhook on your backend. The Measurement API is the only supported method for this integration. You can view a pseudo-code example for constructing the API request below.

The webhook should trigger every time a game open (session start) event is logged in your telemetry system.

The Measurement API Endpoint requires the following parameters:

- IP address
- User ID
- Event timestamp
- Platform
- Storefront

??? abstract "API Request Pseudo-code example"

    ```json
    # Example Python Code for server-side telemetry
    import requests
    
    
    url = "https://tracks.your-game.com/measure"  
    
    
    payload = {
     'user_id': '1a23fd44c21f8l5r',
     'event_name': 'game_open',
     'ip': '175.124.248.15',
     'time_stamp': '1724094783',
     'platform': 'pc',
     'storefront': 'steam'
    }
    headers = {
     'Authorization': 'Bearer API_KEY_TOKEN'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)   
    ```

For each game added, the Second Stage Analytics team provides comprehensive support for integration, deployment, and testing, starting with an onboarding call.
