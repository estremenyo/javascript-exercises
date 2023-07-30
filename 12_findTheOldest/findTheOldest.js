const findTheOldest = function(array) {
    return array.reduce((oldestPerson, person) => {
        if (getAge(person) > getAge(oldestPerson)) oldestPerson = person;
        return oldestPerson;
    }, array[0])
};

const getAge = function(person) {
    // If the person does not have a yearOfDeath, use the current year
    if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
