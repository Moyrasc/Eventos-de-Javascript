// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;

	//your code goes here
	let totalSum = document.querySelector("#resultNumber").value;
	totalSum = parseInt(stringA) + parseInt(stringB)
};
