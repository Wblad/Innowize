/**
 * Функция возвращает год, месяц, день предыдущего дня
 * @param {*} year
 * @param {*} month
 * @param {*} date
 * @returns {object}
 * ```
 * { year: 2022, month: 6, date: 5 }
 * ```
 */
export default function getPrevDate(year, month, date) {
  const currentDate = new Date(`${year}-${month}-${date} 00:00`);
  const prevDate = new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 1);
  year = prevDate.getFullYear();
  month = prevDate.getMonth() + 1;
  date = prevDate.getDate();
  return { year, month, date };
}
