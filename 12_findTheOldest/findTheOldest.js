const findTheOldest = function(people) {
    return people.sort((a, b) => {
        const currentYear = (new Date()).getFullYear();

        let aAge = typeof a.yearOfDeath === 'number' ? 
        a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;

        let bAge = typeof b.yearOfDeath === 'number' ? 
        b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;

        return aAge > bAge ? 1 : -1;
    }).at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
