import getMonthDays from './getMonthDays';

test('getMonthDays() Мы получили прямоугольный календаря делящий на 7?', () => {
  expect(getMonthDays(2022, 1).length % 7).toBe(0);
  expect(getMonthDays(2022, 2).length % 7).toBe(0);
  expect(getMonthDays(2022, 3).length % 7).toBe(0);
  expect(getMonthDays(2022, 4).length % 7).toBe(0);
  expect(getMonthDays(2022, 5).length % 7).toBe(0);
  expect(getMonthDays(2022, 6).length % 7).toBe(0);
  expect(getMonthDays(2022, 7).length % 7).toBe(0);
  expect(getMonthDays(2022, 8).length % 7).toBe(0);
  expect(getMonthDays(2022, 9).length % 7).toBe(0);
  expect(getMonthDays(2022, 10).length % 7).toBe(0);
  expect(getMonthDays(2022, 11).length % 7).toBe(0);
  expect(getMonthDays(2022, 12).length % 7).toBe(0);
});

test('getMonthDays() Мы получили прямоугольный календаря делящий на 7? (проверяем феврали)', () => {
  expect(getMonthDays(2021, 2).length % 7).toBe(0);
  expect(getMonthDays(2020, 2).length % 7).toBe(0);
  expect(getMonthDays(2019, 2).length % 7).toBe(0);
  expect(getMonthDays(2018, 2).length % 7).toBe(0);
  expect(getMonthDays(2017, 2).length % 7).toBe(0);
  expect(getMonthDays(2016, 2).length % 7).toBe(0);
  expect(getMonthDays(2015, 2).length % 7).toBe(0);
  expect(getMonthDays(2014, 2).length % 7).toBe(0);
  expect(getMonthDays(2013, 2).length % 7).toBe(0);
  expect(getMonthDays(2012, 2).length % 7).toBe(0);
  expect(getMonthDays(2011, 2).length % 7).toBe(0);
  expect(getMonthDays(2010, 2).length % 7).toBe(0);
  expect(getMonthDays(2009, 2).length % 7).toBe(0);
  expect(getMonthDays(2008, 2).length % 7).toBe(0);
});

test('getMonthDays() Первый день это понеделник в кадратном календаре?', () => {
  let real;

  real = new Date(getMonthDays(2022, 1)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 2)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 3)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 4)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 5)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 6)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 7)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 8)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 9)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 10)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 11)[0]?.date).getDay();
  expect(real).toBe(1);

  real = new Date(getMonthDays(2022, 12)[0]?.date).getDay();
  expect(real).toBe(1);
});

test('getMonthDays() Последний день это воскресенье в кадратном календаре?', () => {
  let real;

  real = new Date(getMonthDays(2022, 1).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 2).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 3).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 4).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 5).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 6).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 7).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 8).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 9).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 10).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 11).pop()?.date).getDay();
  expect(real).toBe(0);

  real = new Date(getMonthDays(2022, 12).pop()?.date).getDay();
  expect(real).toBe(0);
});
