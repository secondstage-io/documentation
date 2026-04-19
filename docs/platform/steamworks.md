# Steamworks Integration

<p class="docs-audience">For: Steam marketing admin</p>

Steamworks access is required to enable marketing attribution on Steam. It provides secure access to app-specific data (e.g., Steam App ID, user actions, transaction events) that can be used to match off-platform campaign metadata with on-platform conversions. This access is important for activating attribution pipelines and integrating with TRACKS.

## Steamworks Access

If your game is available on Steam, please grant us access by sending an invitation to analytics@secondstage.io with "View Marketing Traffic Data" permissions only.

You can find the "Invite New User" section in Steamworks by navigating to Steamworks → Users & Permissions → Invite New User.

!!! note "Minimum permission"

    Grant only "View Marketing Traffic Data" — no other Steamworks permissions are required. This is a one-way read-only grant and does not give TRACKS access to your game's code, builds, or revenue records.

<figure markdown="span">
  ![Steamworks — Users & Permissions → Invite New User](../assets/marketinganalytics_steamaccess.png)
  <figcaption>Steamworks → Users & Permissions → Invite New User (View Marketing Traffic Data)</figcaption>
</figure>

## Related

- [Tracking Links](../support/trackinglinks.md) — UTM-tagged URLs that drive attributable traffic to your Steam page.
- [Landing Page Integration](landingpages.md) — the TRACKS JavaScript snippet automatically appends UTM parameters to outbound storefront links so Steam traffic is attributed alongside web visits.
