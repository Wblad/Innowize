import getStringDay from './getStringDay';

test('getStringDay() Мы получили строковой день недели?', () => {
  expect(getStringDay(0)).toBe('Sun');
  expect(getStringDay(1)).toBe('Mon');
  expect(getStringDay(2)).toBe('Tue');
  expect(getStringDay(3)).toBe('Wen');
  expect(getStringDay(4)).toBe('Thu');
  expect(getStringDay(5)).toBe('Fri');
  expect(getStringDay(6)).toBe('Sat');
  expect(getStringDay(7)).toBe('Sun');
  expect(getStringDay(0, 'ru')).toBe('Вс');
  expect(getStringDay(1, 'ru')).toBe('Пн');
  expect(getStringDay(2, 'ru')).toBe('Вт');
  expect(getStringDay(3, 'ru')).toBe('Ср');
  expect(getStringDay(4, 'ru')).toBe('Чт');
  expect(getStringDay(5, 'ru')).toBe('Пт');
  expect(getStringDay(6, 'ru')).toBe('Сб');
  expect(getStringDay(7, 'ru')).toBe('Вс');

  expect(getStringDay(-1)).toBe(undefined);
  expect(getStringDay(8)).toBe(undefined);

  expect(getStringDay(-1, 'ru')).toBe(undefined);
  expect(getStringDay(8, 'ru')).toBe(undefined);
});
