TODO:
Update db schema field names to match what's here

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

Since this capsule is in the `example` namespace, it doesn't use [dynamic configs & secrets](https://bixbydevelopers.com/dev/docs/reference/ref-topics/capsule-config).
To setup with a real namespace and keep your data secure:
- [Register your Team and Capsule](https://bixbydevelopers.com/dev/docs/dev-guide/developers/managing-caps.managing-your-team) in the Bixby Developer Center
- [Add configs & secrets](https://bixbydevelopers.com/dev/docs/reference/ref-topics/capsule-config#config-secrets) in the Bixby Developer Center as follows:
  - Configs:
    - `baseUrl`=`https://tutorial-2c6e.restdb.io/rest/`: Update this to match the url provided at the top of your Collection Developer Tools panel
    - `collection`=`userdata`: Collection name from above
    - `userIdField`=`bixbyUserId`: User id field from above
    - `userDataField`=`bixbyUserData`: User data field from above
  - Secrets:
    - `apiKey`=`260deba9fe8e454d9961a139e103b29e495c9`: Update this to match the Server apiKey provided in your Database Settings
- Edit the capsule.bxb file to update the [`id` key](https://bixbydevelopers.com/dev/docs/reference/type/capsule.id) to match your registered capsule namespace and name
- Edit the capsule.properties file to change the `capsule.config.mode` from `example` to `default`

NOTE: You may want to repeat this setup twice to have a Dev and a Prod environment.
