// https://leetcode.com/problems/two-sum/description/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const array = [2, 7, 11, 15]
const target = 9

// const twoSum = (array = [], target = 0) => {
//   const result = []

//   for (let i = 0; i <= array.length; i++) {
//     if (result.length === 2) {
//       break
//     }
//     for (let j = 0; j <= array.length; j++) {
//       const secondIndex = array[i] === array[j] ? j + 1 : j

//       if (array[i] + array[secondIndex] === target) {
//         result[1] = i
//         result[0] = secondIndex
//         break
//       }
//     }
//   }
//   return result
// }

const twoSum = (array = [], target = 0) => {
  const result = []
  const arrayCopy = [...array]

  for (const element of arrayCopy) {
    if (result.length === 2) {
      break
    }

    const possibleValue = target - element
    const possibleIndex = arrayCopy.indexOf(possibleValue)
    if (possibleIndex >= 0) {
      result.push(arrayCopy.indexOf(element))
      result.push(possibleIndex)
    }
  }

  return result
}

console.log(twoSum(array, target))
