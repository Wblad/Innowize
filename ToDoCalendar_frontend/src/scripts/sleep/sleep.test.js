import sleep from './sleep';

test('sleep() Есть задержка?', async () => {
  const start_time = new Date();
  await sleep(300);
  const end_time = new Date();

  const milliseconds = end_time.getTime() - start_time.getTime();

  expect(milliseconds).toBeGreaterThan(300);
});
