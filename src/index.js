module.exports = function getZerosCount(number) {
    let zeros_of_five=0;
    let zeros_of_two=0;
    factorial (number);
    
    //calculate whole number of five
    function five (num) {
        if (num>=5) {
            return 	parseInt(num/5)+five(parseInt(num/5));
        }
        else {
            return 0;
        }
    }
    //calculate whole number of two
    function two (num) {
        if (num>=2) {
            return 	parseInt(num/2)+two(parseInt(num/2));
        }
        else {
            return 0;
        }
    }

    function factorial (num) {
        zeros_of_five+=five(num);
        // zeros_of_two+=two(mass);
    }

    // zeros+=Math.min(zeros_of_five,zeros_of_two);
    return zeros_of_five;
}
