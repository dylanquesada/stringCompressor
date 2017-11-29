function userInput(message){
	if(message != null){
		return prompt(message);
	}
	else{
		return prompt("Enter user input:");
	}
}

function stringCompressor(string){
	var output = [];
	let counter = 1;
	let arrayCounter = 0;
	for (var i = 0; i < string.length; i++){
		
		if(string.charAt(i) === string.charAt(i + 1)){
			counter ++;
		}
		else{
			output[arrayCounter] = counter + string.charAt(i);
			counter = 1;
			arrayCounter++;
		}
	}
	return output;
}

function concatonateArrayToCommalessString(array){
	var outputString = "";
	for (var i = 0; i < array.length; i++) {
		outputString = outputString.concat(array[i])
	}
	return outputString;

}

function runStringCompressor(){
	var output = userInput();
	output = stringCompressor(output);
	output = concatonateArrayToCommalessString(output);
	return output;
}

alert(runStringCompressor());