import toStringTime from './toStringTime';

test('toStringTime() Мы получили время в формате "hh:mm" ?', () => {
  const stringTime = toStringTime(new Date('2022-06-05 13:43:54'));
  const arr = stringTime.split(':');
  const hours = arr[0];
  const minutes = arr[1];
  expect(hours.length).toBe(2);
  expect(minutes.length).toBe(2);
});
