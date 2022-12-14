export default function setDate(stringDate, stringTime) {
  let d = new Date(`${stringDate} ${stringTime}`);
  if (d.toString() === 'Invalid Date') {
    d = new Date();
  }
  return d;
}
