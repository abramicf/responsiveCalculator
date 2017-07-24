angular.module('calculator', []).controller('calcController', ($scope) => {

  $scope.storage = [];
  $scope.addToStorage = function(numOrOperator) {
    $scope.storage.push(numOrOperator);
    console.log($scope.storage);
    console.log('Hello World!');
  };

  $scope.runCalculation = function(str) {
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
    console.log(result);
    return result;
  };

  $scope.calculate = function(arr) {
    var stringArr = arr.join('');
    console.log(stringArr);
    $scope.runCalculation(stringArr);
    $scope.storage = [];
  };


});

