"use strict"

const number = parseInt(prompt('Введіть ціле число', '0'), 10)

if (number) {
  for (let i = 1; i <= 100; i++) {
    let squareNumber = i * i
    if (squareNumber <= number) {
      console.log(i)
    } else {
      break
    }
  }
} else {
  alert('Ведіть ціле число')
}