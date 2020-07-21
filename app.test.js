const { add } = require('./app2');
const { sumNum, eqSt, initial, evenOdd } = require('./app');

test('Should equal 7 when 3 and 4 are passed', () => {
  expect(add(3, 4)).toEqual(7);
});

test('should add all the numbers in the array and return the sum ', () => {
  expect(sumNum([2, 4, 6])).toEqual(12);
});

test('should return true when "code" and "code" are passed', () => {
  expect(eqSt('code', 'code')).toBeTruthy();
});

test('should return "B" and "M" when "Ben Maudslay" is passed ', () => {
  expect(initial('Ben Maudslay')).toMatch(/B M/);
});

test('should return even:[2,4] when receive [1,2,3,4] ', () => {
  //   const Objet = {
  //     even: [2, 4],
  //     odd: [1, 3],
  //   };
  //   expect(evenOdd([1, 2, 3, 4])).objectContaining('even:[2,4]');
  //   expect(Object.even).toBe([2, 4]);
  expect(evenOdd([1, 2, 3, 4])).toMatchObject({ even: [2, 4] });
});
