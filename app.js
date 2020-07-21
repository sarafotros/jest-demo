const sumNum = (input) => {
  const out = input.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0);
  return out;
};

module.exports = {
  sumNum,
};
