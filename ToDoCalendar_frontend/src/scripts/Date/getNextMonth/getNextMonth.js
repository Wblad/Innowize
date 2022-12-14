/**
 * Функция возвращает год и месяц следующего месяца
 * @param {*} year
 * @param {*} month
 * @returns {object}
 * ```
 * { year: 2022, month:6 }
 * ```
 */
export default function getNextMonth(year, month) {
  if (month === '12' || month === 12) {
    year = Number(year) + 1;
    month = 1;
    return { year, month };
  }

  month = Number(month) + 1;
  return { year, month };
}
