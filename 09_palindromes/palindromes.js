const palindromes = function (argument) {
	// regex translation: replace all except ('^') a-z and A-Z and 0-9
	// with empty spaces. 'g' means do this for every character
	// 'i' means ignore letter case
	argument = argument.replace(/[^a-z0-9]/gi, "").toLowerCase();
	let reversed = argument.split("").reverse().join("");
	let toMatch = 0;
	for (i = 0; i < argument.length; i++) {
		if (argument[i] === reversed[i]) toMatch++;
        else return false;
	}
	if (toMatch === argument.length) return true;
};

// Do not edit below this line
module.exports = palindromes;
