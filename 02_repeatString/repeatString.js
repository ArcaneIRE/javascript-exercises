const { TestScheduler } = require("jest");

const repeatString = function(word='', repetitions=1) {
    if (repetitions < 0) return 'ERROR';

    let string = '';
    for (i = 0; i < repetitions; i++) {
        string += word;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
