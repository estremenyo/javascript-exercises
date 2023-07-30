const fibonacci = function(argument) {
    if (argument < 1) return "OOPS";
    let sequence = [];
    for (i = 0; i < argument; i++) {
        // Initialize first indexes
        if (i == 0 || i == 1) {
            sequence[i] = 1;
        }
        // For all other indexes to create
        else {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
    }
    return sequence[argument - 1];
};

// Do not edit below this line
module.exports = fibonacci;
