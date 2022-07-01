function createElement(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
}

// Random color
function changeBgImage() {
  const ramdomDiv = document.querySelector(".random-color");
  const property = document.querySelector(".property");
  let value = `linear-gradient(to right, #${Math.floor(
    Math.random() * 16777215
  ).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})`;

  ramdomDiv.style.backgroundImage = value;
  property.textContent = `background-image: ${value}`;
}

const btnChange = document.querySelector(".btn-change");
btnChange.addEventListener("click", changeBgImage);

changeBgImage();

// Tip calculator
const billAmount = document.getElementById("bill-amount");
const numGuest = document.getElementById("guests");
const tipPercent = document.getElementById("services-quality");
const tipValue = document.querySelector(".tip-value");
const btnCalculate = document.querySelector(".btn-calculator");

billAmount.addEventListener("blur", function (e) {
  if (
    (e.target.value !== "" && isNaN(Number(e.target.value))) ||
    Number(e.target.value) <= 0
  ) {
    this.parentElement.nextElementSibling.classList.remove("d-none");
  } else {
    this.parentElement.nextElementSibling.classList.add("d-none");
  }
});

billAmount.addEventListener("input", function (e) {
  this.parentElement.nextElementSibling.classList.add("d-none");
});

numGuest.addEventListener("blur", function (e) {
  if (
    (e.target.value !== "" && !Number.isInteger(Number(e.target.value))) ||
    Number(e.target.value) <= 0
  ) {
    this.parentElement.nextElementSibling.classList.remove("d-none");
  } else {
    this.parentElement.nextElementSibling.classList.add("d-none");
  }
});

numGuest.addEventListener("input", function (e) {
  this.parentElement.nextElementSibling.classList.add("d-none");
});

tipPercent.addEventListener("change", function (e) {
  if (Number(e.target.value) !== 0) {
    this.nextElementSibling.classList.add("d-none");
  }
});

btnCalculate.addEventListener("click", function () {
  let isAllValided = true;

  if (isNaN(Number(billAmount.value)) || Number(billAmount.value) <= 0) {
    isAllValided = false;
    billAmount.parentElement.nextElementSibling.classList.remove("d-none");
  }

  if (
    !Number.isInteger(Number(numGuest.value)) ||
    Number(numGuest.value) <= 0
  ) {
    isAllValided = false;
    numGuest.parentElement.nextElementSibling.classList.remove("d-none");
  }

  if (Number(tipPercent.value) === 0) {
    isAllValided = false;
    tipPercent.nextElementSibling.classList.remove("d-none");
  }

  if (isAllValided) {
    tipValue.textContent = `$${
      (Number(billAmount.value) * Number(tipPercent.value)) /
      Number(numGuest.value)
    }`;
  } else {
    tipValue.textContent = "$0";
  }
});

// Todo appp

// First init set localStorage
if (localStorage.getItem("todos") === null) {
  localStorage.setItem("todos", JSON.stringify([]));
}

// Add todo
const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", function () {
  const inputTodo = document.querySelector(".todo-input");
  if (inputTodo.value !== "") {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(inputTodo.value);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  inputTodo.value = null;
  inputTodo.focus();
  renderTodos(JSON.parse(localStorage.getItem("todos")));
});

// Delete todo
function deleteTodo() {
  let index = Number(this.parentElement.dataset.index);
  let todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(JSON.parse(localStorage.getItem("todos")));
}

// Move todo
function moveTodo() {
  let index = Number(this.parentElement.dataset.index);
  let todos = JSON.parse(localStorage.getItem("todos"));
  if (this.classList.contains("move-up")) {
    if (index > 0) {
      [todos[index - 1], todos[index]] = [todos[index], todos[index - 1]];
    }
  } else if (this.classList.contains("move-down")) {
    if (index < todos.length - 1) {
      [todos[index + 1], todos[index]] = [todos[index], todos[index + 1]];
    }
  }

  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(JSON.parse(localStorage.getItem("todos")));
}

// Edit todo
function editTodo() {
  let index = Number(this.parentElement.dataset.index);
  let todoList = document.querySelectorAll(".todo-item");
  Array.from(todoList).forEach((todo) => {
    if (Number(todo.dataset.index) === index) {
      let todoInput = todo.querySelector(".input-todo-text");
      todoInput.disabled = false;
      todoInput.focus();
    }
  });
}

// Function render all todos
function renderTodos(todos) {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = ``; // Remove all child

  todos.forEach(function (todo, index) {
    let btnDelete = createElement(
      "div",
      { className: "todo-action delete" },
      createElement("i", { className: "fa-solid fa-trash-can" })
    );

    btnDelete.addEventListener("click", deleteTodo);

    let btnEdit = createElement(
      "div",
      { className: "todo-action edit" },
      createElement("i", { className: "fa-solid fa-pen-to-square" })
    );

    btnEdit.addEventListener("click", editTodo);

    let btnMoveUp = createElement(
      "div",
      { className: "move-up" },
      createElement("i", { className: "fa-solid fa-angle-up" })
    );

    btnMoveUp.addEventListener("click", moveTodo);

    let btnMoveDown = createElement(
      "div",
      { className: "move-down" },
      createElement("i", { className: "fa-solid fa-angle-down" })
    );

    btnMoveDown.addEventListener("click", moveTodo);

    let inputTodo = createElement("input", {
      className: "input-todo-text",
      type: "text",
      value: todo,
      spellcheck: false,
      disabled: "disabled",
    });

    inputTodo.addEventListener("blur", function (e) {
      if (!this.disabled) {
        let index = Number(this.parentElement.parentElement.dataset.index);
        let todos = JSON.parse(localStorage.getItem("todos"));
        todos[index] = this.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        this.disabled = true;
      }
    });

    let todoItem = createElement(
      "div",
      { className: "todo-item" },
      createElement("div", { className: "todo-content" }, inputTodo),
      btnEdit,
      btnDelete,
      btnMoveUp,
      btnMoveDown
    );

    todoItem.setAttribute("data-index", index);

    todoList.append(todoItem);
  });

  const todoSummary = document.querySelector(".todo-summary");
  const btnClearAll = document.querySelector(".btn-clear-all");
  if (todos.length === 0) {
    todoSummary.textContent = "All done!";
    btnClearAll.classList.add("d-none");
  } else {
    todoSummary.innerHTML = `You have <b>${todos.length}</b> pending task`;
    btnClearAll.classList.remove("d-none");
  }

  btnClearAll.addEventListener("click", function () {
    localStorage.setItem("todos", JSON.stringify([]));
    renderTodos(JSON.parse(localStorage.getItem("todos")));
  });

  return todoList;
}

renderTodos(JSON.parse(localStorage.getItem("todos")));
