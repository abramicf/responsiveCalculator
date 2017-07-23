
runCalculation = (str) => {
  let separators = ['\\\+', '-'];
  let tokens = str.split(new RegExp(separators.join('|'), 'g'));
  let addSub = [];
  let totals = [];
  let result;

  for (let char of str) {
    if (char === '+' || char === '-') {
      addSub.push(char);
    }
  }

  for (let i = 0; i < tokens.length; i++) {
    let multDiv = [];
    for (let char of tokens[i]) {
      if (char === '*' || char === '/') {
        multDiv.push(char);
      }
    }
    let multDivSep = ['\\*', '/'];
    let numbers = tokens[i].split(new RegExp(multDivSep.join('|'), 'g'));

    let runningTotal = parseInt(numbers[0]);

    for (let j = 1; j < numbers.length; j++) {
      multDiv[j - 1] === '*' ? runningTotal *= parseInt(numbers[j]) : runningTotal /= parseInt(numbers[j]);
    }
    totals.push(runningTotal);
  }

  result = totals[0];
  for (let i = 1; i < totals.length; i++) {
    addSub[i - 1] === '+' ? result += totals[i] : result -= totals[i];
  }
  return result;
};

//works for single int

// runCalculation = (str) => {
//   let separators = ['\\\+', '-'];
//   let tokens = str.split(new RegExp(separators.join('|'), 'g'));
//   let addSub = [];
//   let totals = [];
//   let result;

//   for (let char of str) {
//     if (char === '+' || char === '-') {
//       addSub.push(char);
//     }
//   }

//   for (let i = 0; i < tokens.length; i++) {
//     let item = tokens[i].split('');
//     console.log(item);
//     let runningTotal = parseInt(item[0]);
//     for (let j = 1; j < item.length; j += 2) {
//       item[j] === '*' ? runningTotal *= parseInt(item[j + 1]) : runningTotal /= parseInt(item[j + 1]);
//     }
//     totals.push(runningTotal);
//   }


//   console.log(totals);
//   console.log(addSub);
//   result = totals[0];
//   for (let i = 1; i < totals.length; i++) {
//     addSub[i - 1] === '+' ? result += totals[i] : result -= totals[i];
//   }
//   return result;
// };
