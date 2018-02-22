document.addEventListener("DOMContentLoaded", function(event){
    var screen = document.getElementById("screen");
	var numbers = document.getElementsByClassName("buttonNum");
	var number1 = null;
	var operator = null;
	var number2 = null;
	var sums = null;
	var clear = null;
	var ac = document.getElementsByClassName("buttonClear");
	var operators = document.getElementsByClassName("operator");
	var sums = document.getElementsByClassName("equals");
	for (var i = 0; i < ac.length; i++) {
    	ac[i].addEventListener("click", function(event){
            number1 = null;
			operator = null;
			number2 = null;
			sum = null;
			sums = null;
			screen.innerHTML = "Sparta Calculator";
        });   
    }	
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function(event){
        	if(number1 == null){
	        	screen.innerHTML = event.target.innerHTML;
	            number1 = event.target.innerHTML;
        	} else {
	        	screen.innerHTML = event.target.innerHTML;
	            number2 = event.target.innerHTML;
        	}  
        });      
    }
	for (var i = 0; i < operators.length; i++) {
    	operators[i].addEventListener("click", function(event){
            screen.innerHTML = event.target.innerHTML;
            operator = event.target.innerHTML;
        });   
    }
    for (var i = 0; i < sums.length; i++) {
    	sums[i].addEventListener("click", function(event){
    		if(operator == "+"){
    			sum = (parseFloat(number1) + parseFloat(number2));
    			screen.innerHTML = sum;
    			number1 = sum;
				operator = null;
				number2 = null;
    			console.log(sum);
    		} else if(operator == "-"){
    			sum = (parseFloat(number1) - parseFloat(number2));
    			screen.innerHTML = sum;
    			number1 = sum;
				operator = null;
				number2 = null;
    			console.log(sum);
    		} else if(operator == "*"){
    			sum = (parseFloat(number1) * parseFloat(number2));
    			screen.innerHTML = sum;
    			number1 = sum;
				operator = null;
				number2 = null;
    			console.log(sum);
    		} else if(operator == "/"){
    			sum = (parseFloat(number1) / parseFloat(number2));
    			screen.innerHTML = sum;
    			number1 = sum;
				operator = null;
				number2 = null;
    			console.log(sum);
    		}
        })
	}
});