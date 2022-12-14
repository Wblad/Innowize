/**
 * Функция возвращает предыдущий год и месяц предыдущего месяца
 * @param {*} year
 * @param {*} month
 * @returns {object}
 * ```
 * { year: 2022, month: 6 }
 * ```
 */
export default function getPrevMonth(year, month) {
  if (month === '1' || month === 1) {
    year = Number(year) - 1;
    month = 12;
    return { year, month };
  }

  month = Number(month) - 1;
  return { year, month };
}
