"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  const button = document.querySelector(".button-add");
  const todoList = document.querySelector(".todo-list");
  const modalElement = document.getElementById("todoModal");
  const modal = new bootstrap.Modal(modalElement);
  const modalText = document.getElementById("modalTodoText");

  const getTodos = () => JSON.parse(localStorage.getItem("todos")) || [];

  const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = () => {
    const taskText = input.value.trim();
    if (!taskText) {
      console.warn("Неможливо створити пустий TODO");
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
    input.value = "";
  };

  const renderTodos = () => {
    todoList.innerHTML = "";
    getTodos().forEach((todo) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center todo-item";
      li.dataset.id = todo.id;

      li.innerHTML = `
        <div>
          <input type="checkbox" class="form-check-input me-2 checkbox" ${todo.completed ? "checked" : ""}>
          <span class="task-text me-2 ${todo.completed ? "text-decoration-line-through" : ""}">${todo.text}</span>
        </div>
        <button class="btn btn-danger btn-sm btn-delete">Видалити</button>
      `;

      todoList.appendChild(li);
    });
  };

  const toggleTodo = (id, completed) => {
    const todos = getTodos().map((todo) => (todo.id === id ? { ...todo, completed } : todo));
    saveTodos(todos);
    renderTodos();
  };

  const deleteTodo = (id) => {
    const todos = getTodos().filter((todo) => todo.id !== id);
    saveTodos(todos);
    renderTodos();
  };

  button.addEventListener("click", addTodo);

  todoList.addEventListener("click", (e) => {
    const li = e.target.closest(".todo-item");
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.classList.contains("btn-delete")) {
      deleteTodo(id);
    }

    if (e.target.classList.contains("task-text")) {
      modalText.textContent = e.target.textContent;
      modal.show();
    }
  });

  todoList.addEventListener("change", (e) => {
    if (e.target.classList.contains("checkbox")) {
      const id = Number(e.target.closest(".todo-item").dataset.id);
      toggleTodo(id, e.target.checked);
    }
  });

  renderTodos();
});
