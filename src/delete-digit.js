const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const s = n.toString();
  let max = -Infinity;

  for (let i = 0; i < s.length; i++) {
    const num = parseInt(s.slice(0, i) + s.slice(i + 1));
    if (num > max) {
      max = num;
    }
  }

  return max;
}
module.exports = {
  deleteDigit
};
