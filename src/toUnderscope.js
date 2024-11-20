/*
https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

export function toUnderscore(value = 0) {
	if (value && typeof value !== 'string') {
  	return String(value)
  }
	let result = '';
	for (let i = 0; i < value.length; i++) {
  	const letter = value[i]
  	if (/^[A-Z]*$/.test(letter) && i !== 0) {
    	result += "_"  	
    }
    result += letter.toLowerCase()
  }
  return result
}


export const toUnderscore_v2 = function(string) {
	return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
};
