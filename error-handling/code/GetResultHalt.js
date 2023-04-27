import fail from 'fail';
export default function getResultHalt() {
  throw fail.checkedError(
    'This error will cause a halt.',
    'ErrorWhichHalts',
    {}
  );
}
