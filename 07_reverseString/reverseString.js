const reverseString = function(string) {
    let result = ``;
    for (let i = string.length; i > 0; i--) {
        result += string[i - 1];
    }
    console.log(result);
    return result;
    return string.split('').reverse().join('');
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
