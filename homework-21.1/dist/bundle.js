"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector(".input");
  var button = document.querySelector(".button-add");
  var todoList = document.querySelector(".todo-list");
  var modalElement = document.getElementById("todoModal");
  var modal = new bootstrap.Modal(modalElement);
  var modalText = document.getElementById("modalTodoText");
  var getTodos = function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  var saveTodos = function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  var addTodo = function addTodo() {
    var taskText = input.value.trim();
    if (!taskText) {
      console.warn("Неможливо створити пустий TODO");
      return;
    }
    var todo = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    var todos = getTodos();
    todos.push(todo);
    saveTodos(todos);
    renderTodos();
    input.value = "";
  };
  var renderTodos = function renderTodos() {
    todoList.innerHTML = "";
    getTodos().forEach(function (todo) {
      var li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center todo-item";
      li.dataset.id = todo.id;
      li.innerHTML = "\n        <div>\n          <input type=\"checkbox\" class=\"form-check-input me-2 checkbox\" ".concat(todo.completed ? "checked" : "", ">\n          <span class=\"task-text me-2 ").concat(todo.completed ? "text-decoration-line-through" : "", "\">").concat(todo.text, "</span>\n        </div>\n        <button class=\"btn btn-danger btn-sm btn-delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n      ");
      todoList.appendChild(li);
    });
  };
  var toggleTodo = function toggleTodo(id, completed) {
    var todos = getTodos().map(function (todo) {
      return todo.id === id ? _objectSpread(_objectSpread({}, todo), {}, {
        completed: completed
      }) : todo;
    });
    saveTodos(todos);
    renderTodos();
  };
  var deleteTodo = function deleteTodo(id) {
    var todos = getTodos().filter(function (todo) {
      return todo.id !== id;
    });
    saveTodos(todos);
    renderTodos();
  };
  button.addEventListener("click", addTodo);
  todoList.addEventListener("click", function (e) {
    var li = e.target.closest(".todo-item");
    if (!li) return;
    var id = Number(li.dataset.id);
    if (e.target.classList.contains("btn-delete")) {
      deleteTodo(id);
    }
    if (e.target.classList.contains("task-text")) {
      modalText.textContent = e.target.textContent;
      modal.show();
    }
  });
  todoList.addEventListener("change", function (e) {
    if (e.target.classList.contains("checkbox")) {
      var id = Number(e.target.closest(".todo-item").dataset.id);
      toggleTodo(id, e.target.checked);
    }
  });
  renderTodos();
});
