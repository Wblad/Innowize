/**
 * Фнукция возвращает дату в формате "yyyy-mm-dd"
 * @param {Date} d
 * @returns {string}
 * ```
 * 2022-06-05
 * ```
 */
export default function toStringDate(d = new Date()) {
  if (d.toString() === 'Invalid Date') {
    d = new Date();
  }

  const year = d.getFullYear();

  let month = d.getMonth() + 1;
  month = month < 10 ? `0${month}` : `${month}`;

  let date = d.getDate();
  date = date < 10 ? `0${date}` : `${date}`;

  return `${year}-${month}-${date}`;
}
