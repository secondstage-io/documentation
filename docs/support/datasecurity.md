# Data Handling & Security

!!! tip "Important:"

    We do not provide legal advice. This page is designed to help game developers gain a better understanding of managing their players' rights when working with Second Stage. You should consult your legal counsel before making decisions about how your company complies with the evolving landscape of consumer privacy. 
    
Second Stage is committed to providing our partners and clients with the highest level of transparency and governance, ensuring they comply with the GDPR and CCPA at all times. As a result, privacy is a fundamental principle of TRACKS.

Tracks enhances privacy by minimizing data exposure through a smart and secure hybrid cloud setup. On top, TRACKS offers API-level access to GDPR compliance tools, enabling you to efficiently manage rights such as access requests, the right to be forgotten, and opt-outs. As a managed service provider, our team is always available to support you in maintaining GDPR compliance.

Under the GDPR, the roles of data controller and data processor are defined as follows:

**Data Controller:** The data controller is the entity that determines the purposes and means of processing personal data. Essentially, the controller decides why and how personal data will be processed. They are responsible for ensuring GDPR compliance, handling data subjects' rights, and managing relationships with data processors.

**Data Processor:** The data processor acts on behalf of the data controller and processes personal data according to the controller's instructions. The processor doesn't own or control the data but is responsible for implementing appropriate technical and organizational measures to protect it. They must comply with the controller’s instructions and maintain records of processing activities.

Both controllers and processors have specific responsibilities and obligations under GDPR, particularly regarding data protection, breach notifications, and agreements defining the scope of data processing.

## Data Handling under GDPR regulations

TRACKS follows GDPR best practices to protect user privacy and ensure legal compliance:

- Limited data sharing: Built on a scalable, auto-managed cloud infrastructure designed like on-premises, Second Stage only receives the minimum data necessary for marketing attribution, always collected with explicit user consent.
- Minimal data collection: IP addresses are salted and hashed, and data retention is temporary (e.g., 30 days). No user IDs or device identifiers are stored at this stage.
- Consent-managed in-game telemetry: Any attribution or fingerprinting involving identifiable data occurs only within the game, where consent is explicitly obtained (e.g., via the EULA).
- Consent for external tools: Google Analytics, pixels, or cookies on our website are used strictly under user consent through our consent manager.
- No tracking cookies on your website: We do not set cookies or use client-side storage on your product landing page. Only minimal technical data—such as pseudonymized IP addresses via user-agent headers—is processed.
- Right to be forgotten: TRACKS provides a GDPR-compliant “right to forget” API, enabling users or controllers to delete personal data upon request.

This approach ensures that data collection is minimized, pseudonymized, and fully consent-managed, reflecting GDPR best practices.

**On-premise hosting**

For the highest level of security and transparency, TRACKS operates on a scalable, auto-managed cloud infrastructure built like on-prem, including data lake setup, without additional license fees - maximizing control, ensuring GDPR compliance, and minimizing data exposure.

Data Sent to the customers’ server: In this method, all data is sent directly to the customer’s server at their location. TRACKS does not collect any data on its side. This means it is the customer’s responsibility to ensure that proper opt-in and opt-out mechanisms are in place. 

Our suggested deployed method is to use publisher's or studio’s configured Google Cloud project.  Other Google Cloud microservices used include Cloud Storage, Cloud Run, Pub/Sub, Cloud Functions, Artifact Registry, and App Engine. The system user analytics@secondstage.io will be added as an Owner to your Google Cloud Project for operational and management purposes.  If you are unable to use GCP for deployment, Second Stage can support you in setting up an account. 

!!! info "PII Compliance"

    TRACKS handles PII in a standard manner, similar to other telemetric data collection vendors. While data is collected at the user level, it is processed in a pseudonymized and aggregated form. The primary PII concern is the client IP, which is collected as a parameter through the API. This information is not stored openly but is instead hashed using a non-reversible method, with a 30-day data retention period. The reporting suite only provides aggregated data, not user-level data, ensuring that no PII is stored or accessible.

    For marketing campaigns involving a website, TRACKS distinguishes between marketing, analytics and necessary cookies and configures the required tags according to the cookie consent mechanism.

## Data Retention

Event data retention is by default 18 months and resets with new activity. This period can be adjusted upon request. Event data tables will contain one-way SHA256 hashed user IPs, user_ids, event and other supplied parameters like os_platform, storefront, acquisition source etc.  

However, granular log history of the attribution inserts, such as in-game events and web visits, have a 30-day data retention period and can not be increased for only logging, error handling and record keeping purposes and doesn’t get stored in any database.   

## EULA information

Your End User License Agreement (EULA) must clearly state what data will be tracked and why. Please consult your legal councel for further information.

## IP Truncation

We do not offer IP truncation, as it can result in inaccurate or poor data for Measured Attribution Tracking. In this case, we recommend using a Modeled Attribution Tracking solution instead.

## Right to Forget

TRACKS provides a GDPR-compliant “Right to Forget” API, allowing users or controllers to request the deletion of personal data. For detailed information and integration instructions, please refer to [this section](/attribution/gdprapi/).




