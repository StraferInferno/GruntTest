/*jslint browser:true */ /*JSLint is for the checking of any javascript code, and the document global object does not exists everywhere, so you have to manually tell JSLint */
(function(){
	document.getElementById("clickit").onclick = function(){
		var display = document.getElementById("display");
		display.innerText = "Hello";
	};
}());