# TRACKS Data Collection and Processing

## Purpose and Scope
This document describes how the Second Stage TRACKS platform collects and processes data through its two API endpoints: `/collect` and `/measure`. It explains what information is gathered, how it is stored, and how long it is retained.

## Data Flow Overview

### /collect Endpoint
**Trigger:** Activated on every page visit via first-party JavaScript on the product landing page or through a redirect link.  

**Data Collected:**
- Page URL, UTM parameters, `document.referrer`
- IP address (salt-hashed)
- User-Agent (used to detect device type, e.g., mobile vs. desktop)
- Cookie-consent flag (used to control whether media-sharing is enabled)

**Storage:** Data is stored in pseudonymized logs (`collect_logs`).  
**Retention:** Logs are stored for 30 days and then automatically deleted.  
**Notes:** No cookies, LocalStorage, or other client-side storage is used by this endpoint.

### /measure Endpoint
**Trigger:** Activated on `game_open` event  

**Data Collected:**
- Hashed `user_id` (pseudonymized)
- IP address (salt-hashed)
- Storefront (e.g., Steam)
- Event (e.g., first_game_open)
- Event timestamp

**Storage:** Data is stored in `measure_logs`.  
**Retention:** Logs are stored for 30 days and then automatically deleted.

## Cross-Endpoint Linking
Records from `/measure` can be matched to `/collect` logs using the salt-hashed IP address.  
This enables user-level telemetry by linking game activity to prior visits.

## Data Storage and Security
- Data storage is handled on a server deployed on the client side.  
- Data in transit is encrypted (TLS).  
- Data at rest is encrypted, with salt-rotation applied to hashes.  
- Access is controlled through strict permissions.

## Data Deletion and Retention
- Both endpoints apply a 30-day retention period. After that, data is automatically deleted.  
- A "forget API" is available to delete all records associated with a given user ID on request.

## Technical Notes
- No browser cookies or local storage are used unless media-sharing requires it.  
- Only minimal data fields are collected (no persistent device identifiers).  
- IP addresses are never stored in raw form but are salted and hashed before storage.
