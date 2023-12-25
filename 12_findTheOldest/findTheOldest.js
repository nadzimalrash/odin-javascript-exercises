const findTheOldest = function(array) {
    array.forEach(person => {
        person.age = calcAge(person.yearOfDeath, person.yearOfBirth);
    })
    return array.reduce((accumulator, current) => {
        return accumulator.age > current.age ? accumulator : current;
    });
}

const calcAge = function (death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
