"use strict"

const elInput = document.querySelector(".input")
const elButton = document.querySelector(".button-add")
const elTodoList = document.querySelector(".todo-list")


function addTodo() {
    const taskText = elInput.value.trim()
    if (!taskText) {
        console.log("Неможливо створити пустий TODO")
        return
    }

    const todo = {
        id: Date.now(),
        text: taskText,
        completed: false
    }

    saveTodo(todo)
    renderTodo(todo)
    elInput.value = ""
}

function renderTodo(todo) {
    const elItem = document.createElement("li")
    elItem.classList.add("todo-item")
    elItem.dataset.id = todo.id

    const elInputCheckbox = document.createElement("input")
    elInputCheckbox.setAttribute("type", "checkbox")
    elInputCheckbox.classList.add("checkbox")
    elInputCheckbox.checked = todo.completed

    const elParagraph = document.createElement("p")
    elParagraph.classList.add("task-text")
    elParagraph.textContent = todo.text
    if (todo.completed) elParagraph.classList.add("completed")

    const elButtonDelete = document.createElement("button")
    elButtonDelete.classList.add("btn-delete")
    elButtonDelete.textContent = "Видалити"

    elItem.append(elInputCheckbox, elParagraph, elButtonDelete)
    elTodoList.append(elItem)
}

function handleTodoClick(event) {
    const elItem = event.target.closest(".todo-item")
    if (!elItem) return

    const todoId = Number(elItem.dataset.id)

    if (event.target.classList.contains("checkbox")) {
        toggleTodo(todoId, event.target.checked)
    } else if (event.target.classList.contains("btn-delete")) {
        deleteTodo(todoId)
        renderTodos()
    }
}

function saveTodo(todo) {
    const todos = getTodos()
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function toggleTodo(id, completed) {
    const todos = getTodos().map(todo =>
        todo.id === id ? {...todo, completed} : todo
    )
    localStorage.setItem("todos", JSON.stringify(todos))
    document.querySelector(`[data-id="${id}"] .task-text`)
        .classList.toggle("completed", completed)
}

function deleteTodo(id) {
    const todos = getTodos().filter(todo => todo.id !== id)
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodos()
}

function renderTodos() {
    elTodoList.innerHTML = ""
    getTodos().forEach(renderTodo)
}

function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || []
}

const originalPlaceholder = elInput.placeholder
elInput.onblur = () => elInput.placeholder = originalPlaceholder
elInput.onfocus = () => elInput.placeholder = ""


document.addEventListener("DOMContentLoaded", renderTodos)

elButton.addEventListener("click", addTodo)
elTodoList.addEventListener("click", handleTodoClick)