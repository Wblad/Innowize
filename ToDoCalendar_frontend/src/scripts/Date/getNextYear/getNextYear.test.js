import getNextYear from './getNextYear';

test('getNextYear() Получили следующий год?', () => {
  expect(getNextYear(2022)).toBe('2023');
  expect(getNextYear(2021)).toBe('2022');

  expect(getNextYear('2020')).toBe('2021');
  expect(getNextYear('2019')).toBe('2020');

  expect(getNextYear('1000')).toBe('1001');
  expect(getNextYear('0999')).toBe('1000');

  expect(getNextYear('0000')).toBe('0001');
  expect(getNextYear('-000001')).toBe('0000');

  expect(getNextYear('-000002')).toBe('-000001');
  expect(getNextYear('-000003')).toBe('-000002');
  expect(getNextYear('-000004')).toBe('-000003');

  expect(getNextYear('-000010')).toBe('-000009');
  expect(getNextYear('-000020')).toBe('-000019');
});
