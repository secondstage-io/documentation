# Domain Verification & Branded Domain

<p class="docs-audience">For: DevOps / Web admin</p>

Once the TRACKS backend is deployed in your Google Cloud Platform instance, you'll have the option to whitelabel the Measurement API endpoint domain. This feature is not only for branding purposes but also provides greater control over privacy and compliance with client-side CORS (Cross-Origin Resource Sharing) policies.

!!! note "CORS in one line"

    Browsers block web requests that cross domain boundaries. Serving TRACKS from a subdomain of your own site (e.g. `tracks-m.yourgame.com`) keeps requests same-origin, so you avoid CORS blocks and can rely on your existing consent/privacy framework.

To enable your branded domain, the Second Stage team will provide a CNAME record for you to add through your DNS provider. A **TXT record** proves you own the domain (Google reads it during verification). The **CNAME records** route traffic from your chosen subdomains to the TRACKS backend. 

## Whitelabeling TRACKS API Endpoints

To ensure a seamless and branded integration, we recommend whitelabeling the TRACKS API endpoints under your domain. For example:

> **tracks-m.yourgame.com**

This is typically done **after testing** is complete and you're ready to move to **production**.

---

### Example: DNS Configuration Instructions

> ⚠️ **This is an example only** — please adjust based on **your actual landing page domain**.  
> For example, if your website is `mygame.com`, your subdomains might be `tracks-m.mygame.com`, `connect.mygame.com`, etc.
> Let us know if you’d prefer to use a **different domain** for your TRACKS attribution pipeline.

Please complete the following steps in your DNS provider's console.  
_Alternatively, you can send these instructions to your webmaster or IT team._

The Second Stage Analytics team will provide you with the required TXT and CNAME records during the integration process.
The values shown below are for example purposes only.

---

#### 1. **TXT Record (Example Values)**

| Type | Name | Value |
|------|------|-------|
| TXT  | `@`  | `google-site-verification=s8viWkUNollATr03ygUXFA41cJcULc4UOWN4JP0D9Kc` |

---

#### 2. **CNAME Records (Example Values)**

| Type  | Name       | Target                  |
|-------|------------|--------------------------|
| CNAME | `tracks-m` | `ghs.googlehosted.com.` |
| CNAME | `tracks-c` | `ghs.googlehosted.com.` |
| CNAME | `connect`  | `ghs.googlehosted.com.` |

---

Once DNS is configured, please inform the TRACKS team so we can verify the domain and complete your setup.

## Next

Once the branded domain is live, update your [Measurement API](../attribution/measurementapi.md) integration to use the new endpoint URL, and confirm the snippet deployed via [Landing Page Integration](landingpages.md) points at the branded subdomain.
