"use strict"

const iterateOverEachElement = () => {
  for (let i = 1; i <= 10; i++) {
    let enterNumber = parseFloat(prompt("Введіть число більше за 100"))
    if (enterNumber > 100) {
      return enterNumber
    } else if (isNaN(enterNumber)) {
      alert(`Введене значення не є числом, спробуйте ще раз лишилось спроб ${10 - i}`)
    } else {
      alert(`Введене число менше за 100, спробуйте ще раз лишилось спроб ${10 - i}`)
    }
  }
  return "Ви не ввели жодного числа більше за 100"
}
const result = iterateOverEachElement()
console.log(result)