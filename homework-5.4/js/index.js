"use strict"

const number = parseInt(prompt('Введіть ціле число', '0'), 10)

const isPrimeNumberOrNot = (number) => {
  if (isNaN(number)) {
    return 'Введене значення не є числом'
  }
  if (number <= 1) {
    return `Просте число має бути більше за ${number}`
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return `${number} не є простим числом`
    }
  }
  return `${number} є простим числом`
}

console.log(isPrimeNumberOrNot(number))


let notificationOfResult = ''

if (isNaN(number)) {
  notificationOfResult = 'Введене значення не є числом'
} else if (number <= 1) {
  notificationOfResult = `Просте число має бути більше за ${number}`
} else {
  notificationOfResult = `${number} є простим числом`
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      notificationOfResult = `${number} не є простим числом`
      break
    }
  }
}
console.log(notificationOfResult)