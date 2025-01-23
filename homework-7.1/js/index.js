"use strict"

const getSum = (initialValue) => {
  let outerVariable = initialValue
  const internalFunction = (value) => {
    outerVariable += value
    return outerVariable
  }
  return internalFunction
}

const accumulator = getSum(0)

console.log(accumulator(4))
console.log(accumulator(6))
console.log(accumulator(10))
console.log(accumulator(7))