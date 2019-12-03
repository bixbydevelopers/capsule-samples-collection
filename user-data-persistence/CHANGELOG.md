# CHANGELOG

### 2.0.0
- VCAP-14030 Allow running user-data-persistence capsule without default service, as long as dynamic config is defined. 
To adopt, update your dynamic config for `service` to remove the ".js" extension 
(`restdb.js` -> `restdb` and `airtable.js` -> `airtable`)

### 1.0.0
- User Data Persistence Capsule