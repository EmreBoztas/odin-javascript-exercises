const sumAll = function(firstNum, secondNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum) || firstNum < 0 || secondNum < 0) 
    {
      return "ERROR";
    }
    if (firstNum < secondNum) 
    {
      return ((firstNum + secondNum) * (secondNum - firstNum + 1) / 2);
    }
    else if (firstNum > secondNum) 
    {
      return ((firstNum + secondNum) * (firstNum - secondNum + 1) / 2);
    }
    else 
    {
      return "ERROR";
    }
};

console.log(sumAll(2, 4)); // 9

// Do not edit below this line
module.exports = sumAll;
