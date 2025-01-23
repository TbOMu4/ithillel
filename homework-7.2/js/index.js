"use strict"

function curriedMultiplyNumbers(multiplicand){
  return function (multiplier){
    return multiplicand * multiplier
  }
}
console.log(curriedMultiplyNumbers(5)(2))

//------------------------------------------------------------------------------------------------------------
const getMultiplyNumbers = (multiplicand) => {
  const getMultiply = (multiplier) => multiplicand * multiplier
  return getMultiply
}

console.log(getMultiplyNumbers(2)(5))

// ------------------------------------------------------------------------------------------------------------

const getMultiplyNumbersFirst = (multiplicand, multiplier) => multiplicand * multiplier
const result = getMultiplyNumbersFirst(5, 2)
console.log(result)

const getResultMultiplyNumbersFirst = () => console.log(getMultiplyNumbersFirst(5, 2))
getResultMultiplyNumbersFirst()

// ------------------------------------------------------------------------------------------------------------

const getMultiplyNumbersSecond = (multiplicand, multiplier, callback) => {
  const result = multiplicand * multiplier
  callback(result)
}

const getResultMultiplyNumbersSecond = (result) => {
  console.log(result)
}

getMultiplyNumbersSecond(5, 2, getResultMultiplyNumbersSecond)


