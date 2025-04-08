"use strict";

$(document).ready(function () {
  const $input = $(".input");
  const $button = $(".button-add");
  const $todoList = $(".todo-list");
  const modal = new bootstrap.Modal(document.getElementById("todoModal"));
  const $modalText = $("#modalTodoText");

  function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addTodo() {
    const taskText = $input.val().trim();
    if (!taskText) {
      console.log("Неможливо створити пустий TODO");
      return;
    }

    const todo = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    const todos = getTodos();
    todos.push(todo);
    saveTodos(todos);
    renderTodos();
    $input.val("");
  }

  function renderTodos() {
    $todoList.empty();
    const todos = getTodos();
    todos.forEach((todo) => {
      const $item = $(`
                <li class="list-group-item d-flex w-500 w-750 justify-content-between align-items-center todo-item" data-id="${todo.id}">
                    <div>
                        <input type="checkbox" class="form-check-input me-2 checkbox" ${todo.completed ? "checked" : ""}>
                        <span class="task-text  me-2  ${todo.completed ? "text-decoration-line-through" : ""}">${todo.text}</span>
                    </div>
                    <button class="btn btn-danger btn-sm btn-delete">Видалити</button>
                </li>
            `);
      $todoList.append($item);
    });
  }

  function toggleTodo(id, completed) {
    const todos = getTodos().map((todo) => (todo.id === id ? { ...todo, completed } : todo));
    saveTodos(todos);
    renderTodos();
  }

  function deleteTodo(id) {
    const todos = getTodos().filter((todo) => todo.id !== id);
    saveTodos(todos);
    renderTodos();
  }

  $button.on("click", addTodo);

  $todoList.on("click", ".btn-delete", function () {
    const id = Number($(this).closest(".todo-item").data("id"));
    deleteTodo(id);
  });

  $todoList.on("change", ".checkbox", function () {
    const id = Number($(this).closest(".todo-item").data("id"));
    toggleTodo(id, $(this).is(":checked"));
  });

  $todoList.on("click", ".task-text", function () {
    const text = $(this).text();
    $modalText.text(text);
    modal.show();
  });

  renderTodos();
});
