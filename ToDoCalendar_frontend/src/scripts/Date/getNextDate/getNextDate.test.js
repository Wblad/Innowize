import getNextDate from './getNextDate';

test('getNextDate() Получили следующий день?', () => {
  expect(getNextDate(2021, 12, 31).date).toBe(1);
  expect(getNextDate(2022, 1, 15).date).toBe(16);
  expect(getNextDate(2022, 1, 31).date).toBe(1);

  expect(getNextDate(2021, 12, 31).month).toBe(1);
  expect(getNextDate(2022, 1, 15).month).toBe(1);
  expect(getNextDate(2022, 1, 31).month).toBe(2);

  expect(getNextDate(2021, 12, 31).year).toBe(2022);
  expect(getNextDate(2022, 1, 15).year).toBe(2022);
  expect(getNextDate(2022, 1, 31).year).toBe(2022);
});
