# Airtable

Airtable is a service which allows developers to create a cloud hosted spreadsheet exposed through a REST API.

#### Remote Database Setup

To create your own remote spreadsheet, follow these simple steps:

- Sign up for a free Airtable account at https://airtable.com/
- [Create a new Workspace] called `bixby`.
- "Add a base" > "Start from scratch". Change title to `<your-capsule-name>`. Example: `example-user-data`
- Click on the new Base to configure the table
  - The first column is the required and unique [primary field](https://support.airtable.com/hc/en-us/articles/202624179-The-Name-Field) that we will use for the bixby user ids. Click on the header dropdown arrow to edit it. Leave the default type unchanged (single line text) and rename the field. Example: `bixby-user-id`
  - Edit the second column to hold the bixby user data. Customize the field type to "Long text" and rename it. Example: `bixby-user-data`
  - Delete any other columns
  - Delete all row records
- That's it! Your setup should now look like this . Next you will connect and authenticate to it from the capsule. ![Table](./screenshots/airtable/table.png)



The ID for your Base is there.

- Configs:
  - `baseUrl`=`https://api.airtable.com/v0/appj3vi1PtX4Q9CqP/Table%201`: Update this to match the url provided in the docs for your new Workspace and Base at https://airtable.com/api.
  - `collection`=`example-user-data`: Collection name from above
  - `userIdField`=`bixby-user-id`: User id field from above
  - `userDataField`=`bixby-user-data`: User data field from above
- Secrets:
  - `apiKey`=`keypIplWmQs8liVl1`: Update this to match the api key from your account page > API > "Generate API key"
