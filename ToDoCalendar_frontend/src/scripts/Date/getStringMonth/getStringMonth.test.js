import getStringMonth from './getStringMonth';

test('getStringMonth() Мы получили строковой месяц?', () => {
  expect(getStringMonth(1)).toBe('Январь');
  expect(getStringMonth(2)).toBe('Февраль');
  expect(getStringMonth(3)).toBe('Март');
  expect(getStringMonth(4)).toBe('Апрель');
  expect(getStringMonth(5)).toBe('Май');
  expect(getStringMonth(6)).toBe('Июнь');
  expect(getStringMonth(7)).toBe('Июль');
  expect(getStringMonth(8)).toBe('Август');
  expect(getStringMonth(9)).toBe('Сентябрь');
  expect(getStringMonth(10)).toBe('Октябрь');
  expect(getStringMonth(11)).toBe('Ноябрь');
  expect(getStringMonth(12)).toBe('Декабрь');

  expect(getStringMonth(-1)).toBe(undefined);
  expect(getStringMonth(0)).toBe(undefined);
  expect(getStringMonth(13)).toBe(undefined);
});
