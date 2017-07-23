

let numbers = [];
let symbols = [];

runCalculation = (sym, num) => {
  if (sym.length + 1 !== num.length) {
    return 'please enter in following order:  number, operator, number etc...';
  } else {
    let val = num[0];
    for (let i = 1; i < num.length; i++) {
      if (sym[i - 1] === '*') {
        val = val * num[i];
      }
      if (sym[i - 1] === '+') {
        val = val + num[i];
      }
      if (sym[i - 1] === '-') {
        val = val - num[i];
      }
    }
  }
  return val;
};