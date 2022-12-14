import getPrevDate from './getPrevDate';

test('getPrevDate() Получили предыдущий день? (передаем числа)', () => {
  expect(getPrevDate(2022, 1, 1).date).toBe(31);
  expect(getPrevDate(2022, 1, 15).date).toBe(14);
  expect(getPrevDate(2022, 2, 1).date).toBe(31);

  expect(getPrevDate(2022, 1, 1).month).toBe(12);
  expect(getPrevDate(2022, 1, 15).month).toBe(1);
  expect(getPrevDate(2022, 2, 1).month).toBe(1);

  expect(getPrevDate(2022, 1, 1).year).toBe(2021);
  expect(getPrevDate(2022, 1, 15).year).toBe(2022);
  expect(getPrevDate(2022, 1, 2).year).toBe(2022);
});

test('getPrevDate() Получили предыдущий день? (передаем строки)', () => {
  expect(getPrevDate('2022', '1', '1').date).toBe(31);
  expect(getPrevDate('2022', '1', '15').date).toBe(14);
  expect(getPrevDate('2022', '2', '1').date).toBe(31);

  expect(getPrevDate('2022', '1', '1').month).toBe(12);
  expect(getPrevDate('2022', '1', '15').month).toBe(1);
  expect(getPrevDate('2022', '2', '1').month).toBe(1);

  expect(getPrevDate('2022', '1', '1').year).toBe(2021);
  expect(getPrevDate('2022', '1', '15').year).toBe(2022);
  expect(getPrevDate('2022', '1', '2').year).toBe(2022);
});
