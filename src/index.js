module.exports = function zeros(expression) {

	var param=0;
	var zeros=0;
	var	zeros_of_five=0;
	var	zeros_of_two=0;
	var mass = expression.split('*');
	for (var i=0; i<mass.length;i++) {
		if (mass[i][mass[i].length-1]===mass[i][mass[i].length-2]) {
			//go to factorial(n-2)
			factorial_2(parseInt(mass[i]));
		}
		else {
			//go factorial(n-1)
			factorial_1(parseInt(mass[i]));
		}
	}

	//calculate whole number of five
	function five (mass) {
		if (mass>=5) {
		return 	parseInt(mass/5)+five(parseInt(mass/5));
		}
		else {
		return 0;
		}	
	}
	//calculate whole number of two
		function two (mass) {
		if (mass>=2) {
		return 	parseInt(mass/2)+two(parseInt(mass/2));
		}
		else {
		return 0;
		}	
	}

	function factorial_1 (mass) {
	zeros_of_five+=five(mass);
	zeros_of_two+=two(mass);
	}

	function factorial_2 (mass) {
		var p=0, // number of "except 50" in even and odd factorial
				t=0, // number of "except 25" in even factorial
				k=0; // number of "except between 5 and 10, 15 and 20" in even factorial

		//even factorial
		if (mass%2===0) {
			p=parseInt(mass/50);
			t=(parseInt(mass/25))-p;
				if ((mass%10>=5)&&(mass<20)){
					k=1;
				}
			zeros_of_five+=(Math.round(five(mass)/2))-k+p-t;
			zeros_of_two+=two(mass);
		}
		else {
		//odd factorial
			p=parseInt(mass/50);		
			zeros_of_five+=five(mass)-parseInt(mass/10)-p;
		}
	}
	// one zero = 10 = 5*2 // find minimum between five and two
	zeros+=Math.min(zeros_of_five,zeros_of_two);
return zeros;
}
