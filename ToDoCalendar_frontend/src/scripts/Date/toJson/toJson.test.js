import toJson from './toJson';

test('toJson() Мы получили строку?', () => {
  expect(typeof toJson('2022-06-05', '09:55')).toBe('string');
});
