"use strict"

const elForm = document.querySelector('#form')
const elName = document.querySelector('#name')
const elText = document.querySelector('#text')
const elPhone = document.querySelector('#phone')
const elEmail = document.querySelector('#email')
const bntSubmit = document.querySelector('.button')
const elInput = Array.from(document.getElementsByTagName('input'))


function getValidateInput(input) {
    const elError = input.parentElement.querySelector('.error')
    const value = input.value.trim()
    let errorMessage = ''

    if (!value) {
        errorMessage = 'Це поле не може бути порожнім'
    } else if (input.id === 'name' && !/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ']+$/.test(value)) {
        errorMessage = 'Дозволяються лише літери'
    } else if (input.id === 'name' && (value.length < 2 || value.length > 30)) {
        errorMessage = 'Назва має містити від 2 до 30 символів'
    } else if (input.id === 'phone' && !/^\+\d{12}$/.test(value)) {
        errorMessage = 'Номер телефону має бути у форматі +380XXXXXXXXX (13 символів)'
    } else if (input.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = 'Введіть дійсну адресу електронної пошти'
    }
    elError.textContent = errorMessage;
    return errorMessage === ''
}


elInput.forEach(input => {
    const elError = document.createElement('span')
    elError.classList.add('error')
    input.parentElement.append(elError)

    input.addEventListener('blur', () => getValidateInput(input))
    input.addEventListener('focus', () => (elError.textContent = ''))
});

[elName, elText, elEmail].forEach(el => {
    const originalPlaceholder = el.placeholder

    el.onblur = () => el.placeholder = originalPlaceholder
    el.onfocus = () => el.placeholder = ''
})


elForm.addEventListener('submit', function (event) {
    event.preventDefault()

    let isValid = true

    elInput.forEach(input => {
        if (!getValidateInput(input)) {
            isValid = false
        }
    })

    if (isValid) {
        console.log('Name:', elName.value)
        console.log('Message:', elText.value)
        console.log('Phone:', elPhone.value)
        console.log('Email:', elEmail.value)
    }

    elForm.reset()
})
