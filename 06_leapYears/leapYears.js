const leapYears = function(year) {
	// If the year is divisible by 4 but not 100
	if (year % 4 == 0 && (year % 100 != 0)) {
		return true;
	// If the year is divisible by both 100 and 400
	} else if (year % 100 == 0 && year % 400 == 0) {
		return true;
	}
	return false;
};

// Do not edit below this line
module.exports = leapYears;
