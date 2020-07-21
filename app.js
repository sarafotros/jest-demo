const sumNum = (input) => {
  const out = input.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0);
  return out;
};

const eqSt = (st1, st2) => (st1 === st2 ? true : false);

module.exports = {
  sumNum,
  eqSt,
};
