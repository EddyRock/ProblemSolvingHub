// https://www.codewars.com/kata/521ef596c106a935c0000519/javascript
// We need prime numbers and we need them now!
// Write a method that takes a maximum bound and returns
// all primes up to and including the maximum bound.
// For example,
// 11 => [2, 3, 5, 7, 11]

export function getPrimes(num = 0) {
    return Array
    	.from({ length: num + 1}, (v, i) => i)
        .filter((number) => {
   			if((number % 2 === 0 && number !== 2) || number <= 1) {
        		return false;
     		}
     		const limit = Math.floor(Math.sqrt(number));
 	   		for(let index = 3; index <= limit; index += 2) {
        		if (number % index === 0) {
             		return false;
         		}
    		}
     	return true;
 });
}
