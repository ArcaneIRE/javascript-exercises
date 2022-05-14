const removeFromArray = function(array, ...removeList) {
    return array.filter(element => !(removeList.includes(element)));
};

// Do not edit below this line
module.exports = removeFromArray;
