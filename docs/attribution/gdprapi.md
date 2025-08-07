# TRACKS GDPR API

For teams with existing data management systems, **TRACKS’ GDPR APIs** can be integrated to centralize and automate your GDPR compliance processes.

Under the GDPR framework, **personal data** includes (but is not limited to):

- Online identifiers  
- IP addresses  
- User location data  
- Behavioral and demographic profiling data  

TRACKS handles **user opt-outs** through a dedicated **GDPR Forget API**, which will be provided **via a setup email once your overall TRACKS integration is complete and live in production**.

Additional GDPR API features include:

- **Data Removal by `user_id`**
- **Data Request by `user_id`**

The `user_id` parameter is used to identify users across the GDPR API. When passed to the Forget API, it will:
- Permanently delete all associated records
- Block that `user_id` from being recorded in the future

> **Note**: IP addresses will **not** be returned in plain text. They are stored as a **SHA256 hash** and cannot be accessed directly from the API response.

