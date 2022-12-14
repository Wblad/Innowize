import getPrevMonth from './getPrevMonth';

test('getPrevMonth() Получили предыдущий месяц?', () => {
  expect(getPrevMonth(2022, 1).month).toBe(12);
  expect(getPrevMonth(2022, 2).month).toBe(1);

  expect(getPrevMonth('2022', '1').month).toBe(12);
  expect(getPrevMonth('2022', '2').month).toBe(1);
});
