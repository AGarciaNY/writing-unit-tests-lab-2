function octalToDecimal(num) {
  //Write code herez
  // let sum = 0;
  // for (let i = 0; i < num.length; i++) sum += num[i] * (8 ** (num.length - i - 1))
  // return sum || 1
  //return num.split('').map((num2, i) => num2 * (8 ** (num.length - i - 1))).reduce((x, y) => x + y);
  return num.split("").reduce((a, b,i) => a + (b * (8 ** (num.length - i - 1))),0) || 1
}

function anagram(str, arr) {
  //Write code here
  return arr.filter(word => word.split('').sort().join('') === str.split('').sort().join(''));
}

const triangle = (a1, a2, a3) => a1 + a2 + a3 !== 180 || Math.min(a1, a2, a3) === 0 ? "invalid" : [a1, a2, a3].includes(90) ? "right" : [a1, a2, a3].every((val => val < 90)) ? "acute" : "obtuse"

function fridayThe13ths(year) {
  //Write code here
  return new Array(12).fill(0).filter((a, i) => (new Date(year, i, 12).getDay()) === 4).length;
}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
