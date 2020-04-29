const passTest = (x) => (
  x * 3
);

test('test to pass CI', () => {
  expect(passTest(3)).toBe(9)
});