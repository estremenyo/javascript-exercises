function sumAll(num1, num2) {
    if ((typeof num1 != "number" || typeof num2 != "number") || (num1 < 0 || num2 < 0)) {
        return 'ERROR';
    }

	let total = 0;
    let bigger, smaller;

    if (num1 >= num2) {
        bigger = num1;
        smaller = num2;
    } else {
        smaller = num1;
        bigger = num2;
    }

	for (let i = smaller; i <= bigger; i++) {
		total += i;
	}
	return total;
}

// Do not edit below this line
module.exports = sumAll;
