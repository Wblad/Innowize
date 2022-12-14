/**
 * Функция, вовзвращает строковый день недели
 * @param {*} day
 * @param {*} lang
 * @returns {string}
 */
export default function getStringDay(day, lang = 'en') {
  if (lang === 'ru') {
    const ru = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    return ru[day];
  }
  const en = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
  return en[day];
}
