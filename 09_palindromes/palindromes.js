const palindromes = function (string) {
    string = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let leftIndex = 0;
    let rightIndex = string.length - 1;
    do {
        if (string[leftIndex] !== string[rightIndex]) {
            return false;
        }
        leftIndex += 1;
        rightIndex -= 1;
    } while ((rightIndex - leftIndex) > 1);
    return true;
}

// Do not edit below this line
module.exports = palindromes;
