import getNextMonth from './getNextMonth';

test('getNextMonth() Получили следующий месяц?', () => {
  expect(getNextMonth(2021, 12).month).toBe(1);
  expect(getNextMonth(2022, 1).month).toBe(2);

  expect(getNextMonth('2021', '12').month).toBe(1);
  expect(getNextMonth('2022', '1').month).toBe(2);
});
