const sumNum = (input) => {
  const out = input.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0);
  return out;
};

const eqSt = (st1, st2) => (st1 === st2 ? true : false);

const initial = (inp) => {
  return inp
    .split(' ')
    .map((n) => n[0])
    .join(' ');
};

const evenOdd = (mixed) => {
  let even = [];
  let odd = [];
  for (let mix of mixed) {
    mix % 2 === 0 ? even.push(mix) : odd.push(mix);
  }
  return { odd, even };
};
module.exports = {
  sumNum,
  eqSt,
  initial,
  evenOdd,
};
