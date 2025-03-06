"use strict"

const btnBlock = document.querySelector('.button-block')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const elParagraph = document.querySelector('p')

function openModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

function closeModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnBlock.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        openModal()
        elParagraph.textContent = `Клікнуто на кнопці: ${event.target.textContent}`
    }
})

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})