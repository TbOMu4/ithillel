"use strict"

const elBntPrompt = document.querySelector('#btn-prompt')
const elBntLink = document.querySelector('#btn-link')

function getEnterLink() {
    const link = prompt('Введіть сайт на який потрібно перейти', 'https://www.google.com')
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/i

    if (urlRegex.test(link)) {
        elBntLink.setAttribute("href", link)
    } else {
        alert('Введіть коректний URL')
    }
}

function getValidUrl(event) {
    const hrefValue = elBntLink.getAttribute("href")

    if (!hrefValue || hrefValue.trim() === "#" || !/^https?:\/\//.test(hrefValue)) {
        event.preventDefault()
        alert('Некоректне посилання!')
    }
}

elBntPrompt.addEventListener('click', getEnterLink)
elBntLink.addEventListener('click', getValidUrl)