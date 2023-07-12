import remoteDB from "./lib/remoteDB.js";

export default function ({ $vivContext }) {
  const bixbyUserId = $vivContext.bixbyUserId;
  return remoteDB.getUserData(bixbyUserId);
}
