const removeFromArray = function(array, ...items) {
    console.log(items.length);
    for (let i = 0; i < items.length; i++) {
        checkItem = array.indexOf(items[i]);
        console.log(checkItem);
        if (checkItem >= 0) {
            const index = array.indexOf(items[i]);
            const removal = array.splice(index, 1);
        } else {
            console.log(items[i], "does not exist");
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
