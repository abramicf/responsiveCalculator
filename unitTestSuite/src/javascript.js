
runCalculation = function(str) {
  var separators = ['\\\+', '-'];
  var tokens = str.split(new RegExp(separators.join('|'), 'g'));
  var addSub = [];
  var totals = [];
  var result;
  var chars = str.split('');

  for (var i = 0; i < chars.length; i++) {
    if (chars[i] === '+' || chars[i] === '-') {
      addSub.push(chars[i]);
    }
  }

  for (var i = 0; i < tokens.length; i++) {
    var multDiv = [];
    var tokenChars = tokens[i].split('');
    for (var k = 0; k < tokenChars.length; k++) {
      if (tokenChars[k] === '*' || tokenChars[k] === '/') {
        multDiv.push(tokenChars[k]);
      }
    }
    var multDivSep = ['\\*', '/'];
    var numbers = tokens[i].split(new RegExp(multDivSep.join('|'), 'g'));

    var runningTotal = parseInt(numbers[0]);

    for (var j = 1; j < numbers.length; j++) {
      multDiv[j - 1] === '*' ? runningTotal *= parseInt(numbers[j]) : runningTotal /= parseInt(numbers[j]);
    }
    totals.push(runningTotal);
  }

  result = totals[0];
  for (var i = 1; i < totals.length; i++) {
    addSub[i - 1] === '+' ? result += totals[i] : result -= totals[i];
  }
  return result;
};

//works for single int

// runCalculation = (str) => {
//   var separators = ['\\\+', '-'];
//   var tokens = str.split(new RegExp(separators.join('|'), 'g'));
//   var addSub = [];
//   var totals = [];
//   var result;

//   for (var char of str) {
//     if (char === '+' || char === '-') {
//       addSub.push(char);
//     }
//   }

//   for (var i = 0; i < tokens.length; i++) {
//     var item = tokens[i].split('');
//     console.log(item);
//     var runningTotal = parseInt(item[0]);
//     for (var j = 1; j < item.length; j += 2) {
//       item[j] === '*' ? runningTotal *= parseInt(item[j + 1]) : runningTotal /= parseInt(item[j + 1]);
//     }
//     totals.push(runningTotal);
//   }


//   console.log(totals);
//   console.log(addSub);
//   result = totals[0];
//   for (var i = 1; i < totals.length; i++) {
//     addSub[i - 1] === '+' ? result += totals[i] : result -= totals[i];
//   }
//   return result;
// };
