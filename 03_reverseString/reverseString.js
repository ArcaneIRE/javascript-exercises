const reverseString = function(string) {
    string = string.split('');
    reversedString = '';

    for (i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
