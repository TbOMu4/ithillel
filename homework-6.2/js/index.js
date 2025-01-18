"use strict"

const arrayMixed = [42, "Привіт, світ!", 3.14, true, null, [1, 72, 38], 55, 444, {name: "Artem", age: 33}]

const calculateArithmeticMeanFirst = (array) => {
  const numericalValue = array.flat().filter(item => typeof item === 'number')
  if (numericalValue.length === 0) {
    return `В даном масиві [${numericalValue}] відсутні числові елементи`
  } else if (numericalValue.length === 1) {
    return `В даному масиві [${numericalValue}] тільки один числовий елемент = ${numericalValue[0]}`
  }
  const totalAmount = numericalValue.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
  const arithmeticMean = totalAmount / numericalValue.length

  return `Середне арефметичне масива = ${arithmeticMean}`
}

const calculateArithmeticMeanSecond = (array) => array.flat()
    .filter(item => typeof item === 'number')
    .reduce((prevValue, currentValue, _, filteredArray) =>
        prevValue + currentValue / filteredArray.length, 0)


console.log(calculateArithmeticMeanFirst(arrayMixed))
console.log(`Середне арефметичне масива = ${calculateArithmeticMeanSecond(arrayMixed) === 0 ? 'В даном масиві відсутні числові елементи': calculateArithmeticMeanSecond(arrayMixed) }`)
