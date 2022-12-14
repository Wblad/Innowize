/**
 * Функция возвращает JSON дату по дате "yyyy-mm-dd" и времени "hh:mm"
 * @param {string} date
 * @param {string} time
 * @returns {string}
 * ```
 * 2022-06-05T16:55:00.000Z
 * ```
 */
export default function toJson(date, time) {
  const d = new Date(`${date} ${time}`);
  return d.toJSON();
}
