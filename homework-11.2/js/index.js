"use strict"

const elParagraph = document.querySelector('p')
const elButton = document.querySelector('button')

function getTextChangesColor() {
    elParagraph.classList.toggle('color')
    if (elParagraph.classList.contains('color')) {
        elButton.textContent = 'Повернути колір назад'
    } else {
        elButton.textContent = 'Змінти колір тексту'
    }
}

window.onload = function () {
    elButton.addEventListener('click', getTextChangesColor)
}