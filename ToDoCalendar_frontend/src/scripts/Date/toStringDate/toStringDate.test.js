import toStringDate from './toStringDate';

test('toStringDate() Мы получили дату в формате "yyyy-mm-dd" ?', () => {
  const stringDate = toStringDate(new Date('2022-06-05 13:43:54'));
  const arr = stringDate.split('-');
  const year = arr[0];
  const month = arr[1];
  const date = arr[2];
  expect(year.length).toBe(4);
  expect(month.length).toBe(2);
  expect(date.length).toBe(2);
});
