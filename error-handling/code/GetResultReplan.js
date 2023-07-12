import fail from 'fail';
export default function getResultReplan() {
  throw fail.checkedError(
    'This error will cause a replan.',
    'ErrorWhichCausesReplan',
    {}
  );
}
