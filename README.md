# User Data Persistence

This is an example capsule that demonstrates how to persist user data across conversations using a remote database.

## Remote Database Setup

We are using restDB, a service which allows developers to create a cloud hosted noSQL database exposed through a REST API.
To create your own remote database, follow these simple steps:

- Sign up for a free restDB account at https://restdb.io/
- Create a new Database called `tutorial`
- Enter Developer Tools Mode (top right gear icons)
- Create a new Collection called `userdata`
- Add a user id Field `bixbyUserId` of type Text with Requirements Required and Unique
- Add a user data Field `bixbyUserData` of type json with Requirements Required and Unique

## Dynamic Properties Setup

Since this capsule is in the `example` namespace, it doesn't use dynamic configs and secrets (https://bixbydevelopers.com/dev/docs/reference/ref-topics/capsule-config).
To setup with a real namespace and keep your data secure:
- Register your Team and Capsule in the Bixby Developer Center
- Define the following configs & secrets in the Bixby Developer Center
  - Configs:
    - `base-url`=`https://tutorial-2c6e.restdb.io/rest/`: Update this to match the url provided at the top of your Collection Developer Tools panel
    - `collection`=`userdata`: Collection name from above
    - `user-id-field`=`bixbyUserId`: User id field from above
    - `user-data-field`=`bixbyUserData`: User data field from above
  - Secrets:
    - `api-key`=`260deba9fe8e454d9961a139e103b29e495c9`: Update this to match the Server API-key provided in your Database Settings
- Open the capsule.bxb file and update the `id` field to match your registered capsule namespace and name
- Open the capsule.properties file and change the `capsule.config.mode` from `example` to `default`

Then define dynamic configs and secrets for the defined properties in the Dev Center