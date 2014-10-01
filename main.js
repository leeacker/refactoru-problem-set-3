

// Write a function palindrome that takes a single string parameter and returns true if the parameter is a palindrome (the string is the same forward as it is backward), otherwise returns false. For example: palindrome("racecar") should return true because "racecar" is also "racecar" backwards.

var palindrome = function(string){
	// create an array of letters in the string
	var stringArray = string.toLowerCase().split('');
	// create a blank array to push the letters to
	var reverseArray = [];
	// create a for loop for pushing the given string to an array in reverse order
	for(var i=string.length-1; i>=0; i--){
		reverseArray.push(stringArray[i]);
	}
	// join the new array into one string
	newString = reverseArray.join('');
	// compare new reverse string to given string to see if they match (all lowercase)
	return newString === string.toLowerCase();
};

console.log(palindrome('racecar'));
console.log(palindrome('Cats'));
console.log(palindrome('Leel'));


// Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes ('-') between adjacent odd digits. For example: if num is 454793 the output should be "4547-9-3".

var dashInsert = function(num){
	// split the given number to an array
	var numArray = num.toString().split('');
	// create a new array to push to
	var newArray = [];
	// loop through each of the numbers in the given array
	for (var i = 0; i<numArray.length; i++){
		if (newArray.length === 0){
			newArray.push(numArray[i]);
		}
		else if ((newArray[i-1]%2 !== 0) && (numArray[i]%2 !== 0)){
			newArray.push('-'+ numArray[i])
		} else {
			newArray.push(numArray[i]);
		}
	};
	var dashNumber = newArray.join('');
	return dashNumber;
};
console.log(dashInsert(4527382));
console.log(dashInsert(362763582));
console.log(dashInsert(5783292));
console.log(dashInsert(467593574));


// Bonus:
// Write a function caesarCipher that takes a string and number parameter and performs a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

// create alphabet array for encoding
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var caesarCipher = function(string, num){
	// create an array of original items for checking against
	var forReference = string.split('');
	// create an array of lower case letters to match to alphabet array formatting
	var stringArray = string.toLowerCase().split('');
	// create a blank array to push the encoded letters to
	var newArray = [];
	// loop through each of the items in the new array
	for(var i = 0; i<string.length; i++){
		// create a check to see if the proposed new character index will exceed the length of the alphabet array (also checks to see if the given character is a letter or other- if other, that push to array in else statements below)
		if((((alphabet.indexOf(stringArray[i])) + num) > alphabet.length-1) && (alphabet.indexOf(stringArray[i]) !== -1)){
			// create a new variable to account for numbers that exceed the alphabet so that they will restart at index 0 when they exceed the length of the alphabet array
			var index = (alphabet.indexOf(stringArray[i])+num) - (alphabet.length-1);
			// create a while loop to ensure that the index will work
			while(index > alphabet.length-1){
				index = index - alphabet.length-1;
			}
			if (stringArray[i] === forReference[i]){
				// if the character was originally lowercase (check against forReference array), then push it to the new array with the index created in the while loop
				newArray.push(alphabet[index]);
			} else {
				// if the charachter was originally uppercase, change case and then push to the array
				newArray.push(alphabet[index].toUpperCase());
			}
			// if the proposed index does not exceed the alphabet array length then proceed using indexOf and num
		}	else if(alphabet.indexOf(stringArray[i]) === -1){
				newArray.push(stringArray[i]);
		} else if (stringArray[i] === forReference[i]){
				var startIndex = alphabet.indexOf(stringArray[i]);
				newArray.push(alphabet[startIndex + num]);
		} else {
				var startIndex = alphabet.indexOf(stringArray[i]);
				console.log(startIndex);
				newArray.push(alphabet[startIndex + num].toUpperCase());
		}
	};
	// create a new variable for the encoded string once the new array has been joined
	var inCode = newArray.join('');
	return inCode;
};

console.log(caesarCipher('Caesar Cipher', 2));
console.log(caesarCipher('Lee Acker', 6));
console.log(caesarCipher('Zebras in Wyoming!', 154));