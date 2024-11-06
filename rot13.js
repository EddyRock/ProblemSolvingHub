// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript

// How can you tell an extrovert from an introvert at NSA?
// const string = "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.";
// In the elevators, the extrovert looks at the OTHER guys shoes.
// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.


function rot13(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    const alphabetArray = alphabet.split("");
    for (let index = 0; index < str.length; index++) {
        let letter = str[index].toLowerCase();
        const position = alphabetArray.indexOf(letter);
        const isLetterInLowerCase = str[index] === str[index].toLowerCase();
        if (position >= 0) {
            let newPosition = position + 13;

            if (newPosition >= 26) {
                newPosition = 13 - (26 - position);
            }

            letter = alphabet[newPosition];
            if (!isLetterInLowerCase) {
                letter = letter.toUpperCase();
            }
        }
        result = result + letter;
    }
}

rot13(string);