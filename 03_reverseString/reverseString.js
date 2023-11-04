const reverseString = function(string) {
    // const stringLength = string.length;
    if (string.length > 0) {
        const stringArray = Array.from(string);
        let reversed = [];
        for (let i = 1; i <= string.length; i++) {
            reversed += stringArray[string.length - i];
        }
        return reversed;
    } else {
        return '';
    }
};

// Do not edit below this line
module.exports = reverseString;
