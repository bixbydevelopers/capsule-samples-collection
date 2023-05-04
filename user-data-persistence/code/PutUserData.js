import remoteDB from "./lib/remoteDB.js";

export default function ({ $vivContext, userData }) {
  const bixbyUserId = $vivContext.bixbyUserId;
  return remoteDB.putUserData(bixbyUserId, userData);
}
