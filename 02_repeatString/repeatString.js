const { TestScheduler } = require("jest");

const repeatString = function(word='', repetitions=1) {
    if (repetitions < 0) {
        return 'ERROR';
    }

    let repeatedString = '';
    for (i = 0; i < repetitions; i++) {
        repeatedString += word;
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
