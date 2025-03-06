"use strict"

const elInput = document.querySelector(".input")
const elButton = document.querySelector(".button-add")
const elTodoList = document.querySelector(".todo-list")

function getAddTodo() {
    const elItem = document.createElement("li")
    elItem.classList.add("todo-item")
    elTodoList.append(elItem)
    const elInputCheckbox = document.createElement("input")
    elInputCheckbox.setAttribute("type", "checkbox")
    elInputCheckbox.classList.add("checkbox")
    elItem.append(elInputCheckbox)
    const elParagraph = document.createElement("p")
    elParagraph.classList.add("task-text")
    elParagraph.textContent = elInput.value
    elItem.append(elParagraph)
    const elButtonDelete = document.createElement("button")
    elButtonDelete.classList.add("btn-delete")
    elButtonDelete.textContent = "Видалити"
    elItem.append(elButtonDelete)
}

elButton.addEventListener("click", getAddTodo)

elTodoList.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove()
    }
})

