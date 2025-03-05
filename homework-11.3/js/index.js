"use strict"

const elContainer = document.querySelector('.container')
const elWrapper = document.querySelector('.img-block')
const elButton = document.querySelector('.button')


function getRandomImage() {
    elWrapper.innerHTML = ""
    const numbers = []

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 9) + 1
        numbers.push(randomNumber)
        const elImage = document.createElement('img')
        elWrapper.append(elImage)
        elImage.src = `img/image-${randomNumber}.jpeg`
        elImage.width = 192
        elImage.height = 192
    }

    if (numbers.every(num => num === numbers[0])) {
        const elH1 = document.createElement('h1')
        elContainer.prepend(elH1)
        elH1.textContent = 'Вітаємо ви перемогли'
    }
}

window.onload = function () {
    elButton.addEventListener('click', getRandomImage)
}