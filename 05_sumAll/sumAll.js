const sumAll = function(num1, num2) {
    // Accept only numbers
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) return 'ERROR';
    // Accept only positive numbers
    if ((num1 < 0) || (num2 < 0)) return 'ERROR';
    
    // Uses sum of integers formula
    if (num1 < num2) {
        return ((num2 - num1 + 1) * (num1 + num2)) / 2;
    } else {
        return ((num1 - num2 + 1) * (num1 + num2)) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
