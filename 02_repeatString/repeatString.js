const repeatString = function(string, num) {
    myString = "";
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            myString = myString + string;
        }
        return myString;
    }
};

// Do not edit below this line
module.exports = repeatString;
