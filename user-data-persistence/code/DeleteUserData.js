import remoteDB from "./lib/remoteDB.js";

export default function ({ $vivContext, userData }) {
  return remoteDB.deleteUserData(userData);
}
