const sumAll = function(a, b) {
    if (a >= 0 && b >= 0 && typeof a === 'number' && typeof b === 'number') {
        const first = Math.min(a,b);
        const last = Math.max(a,b);
        let total = 0;
        for (let i = first; i <= last; i++) {
            total = total + i;
        }
        return total;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
