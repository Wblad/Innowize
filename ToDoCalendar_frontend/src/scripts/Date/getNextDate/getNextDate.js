/**
 * Функция возвращает год, месяц и день следующего дня
 * @param {*} year
 * @param {*} month
 * @param {*} date
 * @returns {object}
 * ```
 * {year: 2022, month: 6, date: 5}
 * ```
 */
export default function getNextDate(year, month, date) {
  const currentDate = new Date(`${year}-${month}-${date} 00:00`);
  const nextDate = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 1);
  year = nextDate.getFullYear();
  month = nextDate.getMonth() + 1;
  date = nextDate.getDate();
  return { year, month, date };
}
