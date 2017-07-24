
runCalculation = function(str) {

  var separators = ['\\\+', '-'];
  var tokens = str.split(new RegExp(separators.join('|'), 'g'));
  var addSub = [];
  var totals = [];
  var result;
  var chars = str.split('');

  chars.forEach(function(item) {
    (item === '+' || item === '-') && addSub.push(item);
  });

  tokens.forEach(function(item) {
    var multDiv = [];
    var tokenChars = item.split('');
    tokenChars.forEach(function(innerItem) {
      (innerItem === '*' || innerItem === '/') && multDiv.push(innerItem);
    });
    var multDivSep = ['\\*', '/'];
    var numbers = item.split(new RegExp(multDivSep.join('|'), 'g'));
    var runningTotal = parseInt(numbers[0]);

    for (var j = 1; j < numbers.length; j++) {
      multDiv[j - 1] === '*' ? runningTotal *= parseInt(numbers[j]) : runningTotal /= parseInt(numbers[j]);
    }
    totals.push(runningTotal);
  });

  result = totals[0];
  for (var i = 1; i < totals.length; i++) {
    addSub[i - 1] === '+' ? result += totals[i] : result -= totals[i];
  }
  return result;
};


