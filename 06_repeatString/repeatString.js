const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let result = ``;
   for (let i = 0; i < num; i++) {
     result += string;
   }
   console.log(result);
   return result;
};

repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
