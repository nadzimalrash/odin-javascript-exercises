const palindromes = function (string) {
    const oldString = string.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const newString = oldString.split('').reverse().join('');
    return (newString == oldString);
};

// Do not edit below this line
module.exports = palindromes;
