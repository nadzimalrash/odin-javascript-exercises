const fibonacci = function(nth) {
    Number(nth);
    if (nth < 0) {
        return "OOPS";
    }
    else if (nth == 1) {
        return 1;
    }
    else {
        let n1 = 0;
        let n2 = 1;
        let next = 0;
        for (i = 1; i < nth; i++) {
            next = n1 + n2;
            n1 = n2;
            n2 = next;
        }
        console.log(next);
        return next;
    }

};

// Do not edit below this line
module.exports = fibonacci;
