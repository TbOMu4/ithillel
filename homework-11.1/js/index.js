"use strict";

const elContainer = document.querySelector(".container")
const elBntTable = document.querySelector("#button-table")
const elInput = document.querySelector("#input")

function getInputValue(num) {
    if (isNaN(num) || num <= 0) {
        num = 10
    }
    return num
}

function getCreateTable(num) {
    if (elBntTable.textContent === `Вивести таблицю Піфагора (${num}×${num})`) {
        const elTable = document.createElement("table")
        elTable.classList.add("table")
        elContainer.append(elTable)

        const elThead = document.createElement("thead")
        elTable.append(elThead)

        const elTr = document.createElement("tr")
        elThead.append(elTr)

        for (let rowThead = 0; rowThead <= num; rowThead++) {
            const elTh = document.createElement("th")
            elTr.append(elTh)
            elTh.textContent = `${rowThead === 0 ? "×" : rowThead}`
            elTh.classList.add("selection")
        }

        const elTbody = document.createElement("tbody")
        elTable.append(elTbody)

        for (let i = 1; i <= num; i++) {
            const elTr = document.createElement("tr")
            elTbody.append(elTr)

            const elTh = document.createElement("th")
            elTr.append(elTh)
            elTh.textContent = `${i}`
            elTh.classList.add("selection")
            for (let j = 1; j <= num; j++) {
                const elTh = document.createElement("th")
                elTr.append(elTh)
                elTh.textContent = `${i * j}`

            }
        }
        elBntTable.textContent = `Видалити таблицю Піфагора (${num}×${num})`

    } else {
        const elTable = document.querySelector('table')
        if (elTable) {
            elTable.remove()
        }
        elBntTable.textContent = `Вивести таблицю Піфагора (${num}×${num})`
    }

}

function grtUpdateTable() {
    const inputValue = parseFloat(elInput.value)
    const validValue = getInputValue(inputValue)
    getCreateTable(validValue)
}

window.onload = function () {
    elBntTable.addEventListener("click", grtUpdateTable)
}
