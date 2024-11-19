// // https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export function moveZeros(list = []) {
  if (!list.length) {
    return list
  }
  let result = []
  let zerosCount = 0
  for (let i = 0; i <= list.length - 1; i++) {
    if (list[i] === 0) {
      zerosCount += 1
      continue
    }
    result.push(list[i])
  }
  for (let i = 1; i <= zerosCount; i++) {
    result.push(0)
  }
  return result
}

console.log(moveZeros(pattern))
