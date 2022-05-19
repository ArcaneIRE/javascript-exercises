const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    a = 0;
    b = 1;
    let bCopy;

    while (n > 0) {
        bCopy = b;
        b = a + b;
        a = bCopy;
        n--;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
