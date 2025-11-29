const removeFromArray = function(array, ...numbers) {
    let result = array;
    for (let i = 0; i < numbers.length; i++) {
        result = result.filter( (item) => item !== numbers[i]);
    }
    console.log(result);
    return result;
};

removeFromArray([1, 2, 3, 4], 1, 2);
// Do not edit below this line
module.exports = removeFromArray;
