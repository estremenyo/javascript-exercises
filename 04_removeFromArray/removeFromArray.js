const removeFromArray = function(arrayName, ...arrayOfElementsToRemove) {
    for (let i = 0; i < arrayName.length; i++) {
        for (let j = 0; j < arrayOfElementsToRemove.length; j++) {
            if (arrayName[i] === arrayOfElementsToRemove[j]) {
                arrayName.splice(i, 1);
                i = 0;
            }
        }
    }
    return arrayName;
}

// Do not edit below this line
module.exports = removeFromArray;
