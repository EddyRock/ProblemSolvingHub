export function debounce(func, ms = 100) {
  let timer

  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, ms)
  }
}
