// Request access to the $vivContext by declaring it as a parameter
export default function accessVivContext({ $vivContext }) {
  return JSON.stringify($vivContext, undefined, 1);
}
