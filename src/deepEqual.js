// Checking for equality of keys of deep objects
// Task: Write a function that compares two objects
// for deep equality (a deep comparison of properties,
// not just object references).

export function deepEqual(obj1, obj2) {
  const isObjectsAreEqual = obj1 === obj2
  if (isObjectsAreEqual) {
    return true
  }
  const isValueIsNotAnObject = (value = {}) => typeof value !== 'object'
  if (
    !obj1 ||
    !obj2 ||
    isValueIsNotAnObject(obj1) ||
    isValueIsNotAnObject(obj2)
  ) {
    return false
  }
  const getKeysOfObject = (value = {}) => Object.keys(value)
  if (getKeysOfObject(obj1).length !== getKeysOfObject(obj2).length) {
    return false
  }

  for (let key of getKeysOfObject(obj1)) {
    if (
      !getKeysOfObject(obj2).includes(key) ||
      !deepEqual(obj1[key], obj2[key])
    ) {
      return false
    }
  }

  return true
}
