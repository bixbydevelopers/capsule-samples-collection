TODO:
Update db schema field names to match what's here

# User Data Persistence

This is an example capsule that demonstrates how to persist user data across conversations using a remote database.

## Remote Database Setup

We are using restDB, a service which allows developers to create a cloud hosted noSQL database exposed through a REST API.
To create your own remote database, follow these simple steps:

- Sign up for a free restDB account at https://restdb.io/
- [Create a new Database](https://restdb.io/account/databases/) called `bixby`
- Click on the database to go to its home page. Example: https://bixby-25e7.restdb.io/home/
- Click on the top right icon with 3 gears to enter Developer Mode
- Add a new Collection called `<your-capsule-name>`. Example: `example-user-data`
- Click on the new Collection to configure its Fields.
- Add Field for user id of type Text with Requirements Required and Unique. Example: `bixby-user-id`
- Add Field for user data of type json with Requirements Required and Unique. Example: `bixby-user-data`

## Dynamic Properties Setup

Since this capsule is in the `example` namespace, it doesn't use [dynamic configs & secrets](https://bixbydevelopers.com/dev/docs/reference/ref-topics/capsule-config).

To setup with a real namespace and keep your data secure:
- [Register your Team and Capsule](https://bixbydevelopers.com/dev/docs/dev-guide/developers/managing-caps.managing-your-team) in the Bixby Developer Center
- [Add configs & secrets](https://bixbydevelopers.com/dev/docs/reference/ref-topics/capsule-config#config-secrets) in the Bixby Developer Center as follows:
  - Configs:
    - `baseUrl`=`https://bixby-25e7.restdb.io/rest/`: Update this to match the url provided at the top of your Collection Developer Tools panel (without the collection name, which we add separately on next step)
    - `collection`=`example-user-data`: Collection name from above
    - `userIdField`=`bixby-user-id`: User id field from above
    - `userDataField`=`bixby-user-data`: User data field from above
  - Secrets:
    - `apiKey`=`678b16ce31cfef34e796dcefd81ea27072574`: Update this to match the Server apiKey provided in your Database Settings
- Edit the capsule.bxb file to update the [`id` key](https://bixbydevelopers.com/dev/docs/reference/type/capsule.id) to match your registered capsule namespace and name
- Edit the capsule.properties file to change the `capsule.config.mode` from `example` to `default`

NOTE: You may want to repeat this setup twice to have a Dev and a Prod environment.
