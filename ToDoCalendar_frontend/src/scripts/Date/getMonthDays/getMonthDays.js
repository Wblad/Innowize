/**
 * Функция сгенерирует массив текущего месяца c 42 элементами
 * с пустотами спереди по понедельник
 * и с пустотами сзади по воскресенье
 * @param {*} year - год
 * @param {*} month - месяц
 * @returns {array}
 */
export default function getMonthDays(year, month) {
  let array = [];

  let temp = new Date(`${year}-${month}-1 00:00`);
  for (let step = 0; step <= 31; ++step) {
    if (temp.getMonth() + 1 !== Number(month)) break;

    const element = { date: temp.toJSON(), isThisMonth: true };
    array.push(element);

    const d = new Date(temp.getTime() + 1000 * 60 * 60 * 25);

    temp = new Date(
      `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 00:00`
    );
  }

  temp = new Date(array[0].date);
  for (let i = 0; i <= 7; ++i) {
    if (temp.getDay() === 1) break;

    const d = new Date(temp.getTime() - 1000 * 60 * 60 * 24);

    temp = new Date(
      `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 00:00`
    );

    const element = { date: temp.toJSON(), isThisMonth: false };
    array = [element, ...array];
  }

  temp = new Date(array[array.length - 1].date);
  for (let i = 0; i <= 14; ++i) {
    if (temp.getDay() === 0 && array.length >= 42) break;

    const d = new Date(temp.getTime() + 1000 * 60 * 60 * 25);

    temp = new Date(
      `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} 00:00`
    );

    const element = { date: temp.toJSON(), isThisMonth: false };
    array.push(element);
  }

  return array;
}
