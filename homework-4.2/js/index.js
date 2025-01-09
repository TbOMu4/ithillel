"use strict"

const number =  prompt('Enter a three-digit integer', '0')
const checkThreeDigitNumber = /^\d{3}$/

if (checkThreeDigitNumber.test(number)) {
  const uniqueDigits = new Set(number)

  if (uniqueDigits.size === 1) {
    alert('All digits are the same')
  } else if (uniqueDigits.size < number.length) {
    alert('There are repeated digits in the number')
  } else {
    alert('All digits are unique')
  }
} else {
  alert('You did not enter a three-digit number')
}

// if (checkThreeDigitNumber.test(number.toString())) {
//   const numberString = number.toString()
//   let allDigitsSame = true
//
//   for (let i = 1; i < numberString.length; i++) {
//     if (numberString[i] !== numberString[0]) {
//       allDigitsSame = false
//       break
//     }
//   }
//
//   if (allDigitsSame) {
//     alert('All digits are the same')
//   } else {
//     alert('Not all digits are the same')
//     const uniqueDigits = new Set(numberString)
//     if (uniqueDigits.size < numberString.length) {
//       alert('There are repeated digits in the number')
//     } else {
//       alert('All digits are unique')
//     }
//   }
//
// } else {
//   alert('You did not enter a three-digit number')
// }