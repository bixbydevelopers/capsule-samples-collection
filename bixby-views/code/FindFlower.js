import data from "./lib/flowers.js";
import console from 'console';
export default function findFlower() {
  console.debug(data[0]);
  return data[0];
}
