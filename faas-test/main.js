const { sum } = require("./sum.py");

function getsum(a, b) {
  console.log(sum(a, b));
  let temp = sum(a, b);
  return temp;
}

module.exports = getsum;
