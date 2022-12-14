/**
 * Функция возвращает время в формате "hh:mm"
 * @param {Date} d
 * @returns {string}
 * ```
 * 09:55
 * ```
 */
export default function toStringTime(d = new Date()) {
  if (d.toString() === 'Invalid Date') {
    d = new Date();
  }

  let hours = d.getHours();
  hours = hours < 10 ? `0${hours}` : `${hours}`;

  let minutes = d.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hours}:${minutes}`;
}
