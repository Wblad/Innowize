import setDate from './setDate';

test('setDate() Мы получили дату?', () => {
  expect(typeof setDate('2022-06-05', '09:55').toJSON()).toBe('string');
});

test('setDate() Мы получили дату, если не верный формат?', () => {
  expect(typeof setDate('2022-06-05', '09:553').toJSON()).toBe('string');
});
