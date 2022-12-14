import getPrevYear from './getPrevYear';

test('getPrevYear() Получили предыдущий год?', () => {
  expect(getPrevYear(2022)).toBe('2021');
  expect(getPrevYear(2021)).toBe('2020');

  expect(getPrevYear('2020')).toBe('2019');
  expect(getPrevYear('2019')).toBe('2018');

  expect(getPrevYear('1000')).toBe('0999');
  expect(getPrevYear('0999')).toBe('0998');

  expect(getPrevYear('0001')).toBe('0000');
  expect(getPrevYear('0000')).toBe('-000001');

  expect(getPrevYear('-000001')).toBe('-000002');
  expect(getPrevYear('-000002')).toBe('-000003');
  expect(getPrevYear('-000003')).toBe('-000004');

  expect(getPrevYear('-000009')).toBe('-000010');
  expect(getPrevYear('-000019')).toBe('-000020');
});
