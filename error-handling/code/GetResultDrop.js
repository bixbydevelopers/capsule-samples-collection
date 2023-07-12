import fail from 'fail';
export default function getResultDrop({ integer }) {
  if (integer) {
    throw fail.checkedError(
      'This error will cause a drop.',
      'ErrorWhichDrops',
      {}
    );
  }
  return 'This succeeded after the drop.';
}
