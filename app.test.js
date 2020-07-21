const { add } = require('./app2');
const { sumNum, eqSt } = require('./app');

test('Should equal 7 when 3 and 4 are passed', () => {
  expect(add(3, 4)).toEqual(7);
});

test('should add all the numbers in the array and return the sum ', () => {
  expect(sumNum([2, 4, 6])).toEqual(12);
});

test('should return true when "code" and "code" are passed', () => {
  expect(eqSt('code', 'code')).toBeTruthy();
});
