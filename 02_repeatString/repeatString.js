const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';
    let currentString = '';
    for (let i = 0; i < num; i++) {
        currentString += str;
    }
    return currentString;
};

// Do not edit below this line
module.exports = repeatString;
