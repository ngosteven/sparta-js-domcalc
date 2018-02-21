document.addEventListener("DOMContentLoaded", function(event){

	var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];


	function addListItem(value) {

	  

	}

	var mywrapper = document.getElementById("wrapper");

	mywrapper.style.color = "blue";

	var myPara = document.getElementById("myPTag");
	alert("test");
	myPara.style.color = "red";
	myPara.addEventListener("click", function(event){
		alert("You triggered me");
	});

	var selected = document.querySelectorAll('li.selected')
	for (var i = 0; i < selected.length; i++){
		selected[i].style.color = "yellow";
	}

})

// write append loop here


// write the class loop here



