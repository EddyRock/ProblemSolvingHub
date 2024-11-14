// Reverse a string without using built-in methods
// Task: Write a function that reverses a string without
// using the reverse() method or other built-in methods.

export function reverseString(str = '') {
  const splittedString = str.split(' ')

  return splittedString
    .map((word) => {
      return word.split('').reverse().join('')
    })
    .join(' ')
}
