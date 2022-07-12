"use strict";
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => data),
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => data),
// ])
//   .then((data) => {
//     const users = data[0];
//     const posts = data[1];

//     const $posts = $("#posts");
//     posts.forEach((post) => {
//       let currUser = users.filter((user) => {
//         return user.id === post.userId;
//       });

//       $posts.append(`
//     <div>
//       <h2>Tiêu đề: ${post.title}</h2>
//       <p>Tác giả: ${currUser[0].name}</p>
//       <p>Nội dung: ${post.body}</p>
//     </div>
//     <hr/>`);
//     });
//   })
//   .catch(() => console.error("Có lỗi"));

function createElement(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
}

// Run code after load page
const $root = $("#root");
let oldTitleTodo; // Bien ghi lai gia tri cu của todo
$(function () {
  // Hien thi du lieu
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        const err = new Error("HTTP status code " + res.status);
        throw err;
      }
    })
    .then((data) => {
      const todos = data.filter((todo) => todo.userId === 1);
      renderTodos(todos);
    })
    .catch((error) => {
      $root.html(
        `<h1 style="text-align: center; margin-top: 40vh">${error}</h1>`
      );
      $root.removeClass("d-none");
    });

  // Handler events
  addTodo();
  clearAll();
});

function createTodo(todo) {
  return `
            <div class="todo-item" data-id=${todo.id}>
              <div class="todo-content">
                <input type="checkbox" class="todo-status" ${
                  todo.completed === true ? "checked" : ""
                }/>
                <input
                  class="input-todo-text"
                  type="text"
                  spellcheck="false"
                  disabled=""
                  value="${todo.title}"
                />
              </div>

              <div class="todo-action edit">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="d-none fa-solid fa-floppy-disk"></i>
              </div>
              <div class="todo-action delete">
                <i class="fa-solid fa-trash-can"></i>
              </div>
            </div>
    `;
}

function renderTodos(todos) {
  const $todoList = $(".todo-list");
  const todosHtml = todos.reverse().map(createTodo);
  $todoList.append(...todosHtml);
  // Other
  addEvents();
  countTodos();
  // Display
  $root.removeClass("d-none");
}

function addEvents() {
  const $todoList = $(".todo-list");
  // Add event delete
  const $btnDelete = $todoList
    .children(".todo-item")
    .children(".todo-action.delete");

  $btnDelete.off("click");

  $btnDelete.on("click", function (e) {
    deleteTodo(e.target.closest(".todo-item"));
  });

  // Add event click edit
  const $btnEdit = $todoList
    .children(".todo-item")
    .children(".todo-action.edit");

  $btnEdit.off("click");

  $btnEdit.on("click", function (e) {
    const $todoItem = $(e.target.closest(".todo-item"));

    const $todoInput = $(
      $todoItem.children(".todo-content").children(".input-todo-text")
    );

    // Check if edit or save
    const $editOrSave = $(e.target.closest(".todo-action"));
    if ($editOrSave.hasClass("edit")) {
      // Get title todo before focus
      oldTitleTodo = $todoInput.val();
      // Change icon to save
      const $iconEditSave = $todoItem.find(".todo-action.edit > .fa-solid");
      $($iconEditSave[0]).addClass("d-none");
      $($iconEditSave[1]).removeClass("d-none");
      // Change class
      $editOrSave.removeClass("edit");
      $editOrSave.addClass("save");
      // Enable edit todo
      $todoInput.prop("disabled", false);
      let value = $todoInput.val();
      $todoInput.focus().val("").val(value);
    } else if ($editOrSave.hasClass("save")) {
      // Change icon to edit
      const $iconEditSave = $todoItem.find(".todo-action.save > .fa-solid");
      $($iconEditSave[0]).removeClass("d-none");
      $($iconEditSave[1]).addClass("d-none");
      // Change class
      $editOrSave.removeClass("save");
      $editOrSave.addClass("edit");
      // Update todo
      $todoInput.prop("disabled", true);
      // Call update
      updateTodo(e.target.closest(".todo-item"));
    }
  });

  // Add event when blur input todo
  const $updateTodo = $todoList
    .children(".todo-item")
    .children(".todo-content")
    .children(".input-todo-text");

  $updateTodo.off("blur");

  $updateTodo.on("blur", function (e) {
    let temp = oldTitleTodo;
    $updateTodo.prop("disabled", true);
    const $todoItem = $(e.target.closest(".todo-item"));

    $(window).one("click", function (e) {
      e.stopPropagation();
      if (
        $(e.target.closest(".todo-item")).data("id") === $todoItem.data("id") &&
        $(e.target.closest(".todo-action.edit")).length > 0
      ) {
        // Do nothing, chi bat event click de luu
      } else {
        // Change icon to edit
        const $iconEditSave = $todoItem.find(".todo-action.save > .fa-solid");
        $($iconEditSave[0]).removeClass("d-none");
        $($iconEditSave[1]).addClass("d-none");
        // Change class
        const $editOrSave = $todoItem.find(".todo-action.save");
        $editOrSave.removeClass("save");
        $editOrSave.addClass("edit");

        if (
          $(e.target.closest(".todo-item")).data("id") != $todoItem.data("id") // Truong hop click vao nut edit cua todo khac
        ) {
          $($todoItem.find(".input-todo-text")).val(temp);
        } else {
          $($todoItem.find(".input-todo-text")).val(oldTitleTodo);
        }
      }
    });
  });

  // Add event to change status todos
  const $chkStatus = $todoList.find(".todo-status");

  $chkStatus.off("change");

  $chkStatus.on("change", function (e) {
    // Lay gia tri title hien tai
    oldTitleTodo = $(e.target.closest(".todo-item"))
      .find(".input-todo-text")
      .val();

    if (
      $($(e.target.closest(".todo-item")).find(".todo-status")).attr(
        "checked"
      ) === undefined
    ) {
      $($(e.target.closest(".todo-item")).find(".todo-status")).attr(
        "checked",
        true
      );
    } else {
      $($(e.target.closest(".todo-item")).find(".todo-status")).attr(
        "checked",
        false
      );
    }
    updateTodo(e.target.closest(".todo-item"));
  });

  // // When press enter
  // $updateTodo.unbind("keydown");

  // $updateTodo.keydown(function (e) {
  //   if (e.code === "NumpadEnter" || e.code === "Enter") {
  //     // Bo su kien blur
  //     $updateTodo.off("blur");
  //     // Update todo
  //     updateTodo(e.target.closest(".todo-item"));
  //     // Gan lai su kien blur
  //     $updateTodo.on("blur", function (e) {
  //       updateTodo(e.target.closest(".todo-item"));
  //     });
  //   }
  // });
}

function countTodos() {
  const $todoSumary = $(".todo-summary");
  const $btnClearAll = $(".btn-clear-all");

  const todoList = $(".todo-item");
  if (todoList.length > 0) {
    $todoSumary.html(`You have <b>${todoList.length}</b> pending task`);
    $btnClearAll.removeClass("d-none");
  } else {
    $todoSumary.text("All done!");
    $btnClearAll.add("d-none");
  }
}

function addTodo() {
  const $btnAdd = $(".btn-add");
  const $todoInput = $(".todo-input");

  $todoInput.on("focus", function () {
    $todoInput.attr("placeholder", "Add new todo");
  });

  $btnAdd.on("click", function (e) {
    let todoVal = $todoInput.val().trim();
    if (todoVal === "") {
      $todoInput.attr("placeholder", "You must enter title of todo here!");
      setTimeout(function () {
        $todoInput.focus();
      }, 800);
    } else {
      $todoInput.attr("placeholder", "Add new todo");
      // post du lieu
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          title: todoVal,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            const err = new Error("HTTP status code " + res.status);
            throw err;
          }
        })
        .then((data) => {
          const $todoList = $(".todo-list");
          $todoList.prepend(createTodo(data));
          addEvents();
          countTodos();
          $todoInput.val(null);
          $todoInput.focus();
        })
        .catch((error) => {
          alert(`Cann't create new todo! \n${error}`);
        });
    }
  });
}

function clearAll() {
  const $btnClearAll = $(".btn-clear-all");

  $btnClearAll.on("click", function () {
    let result = confirm("Are you sure to delete all todos?");
    if (result) {
      $(".todo-item").each(function (index, todo) {
        deleteTodo(todo, false);
      });
    }
  });
}

function deleteTodo(todo, isConfirm = true) {
  if (isConfirm) {
    let result = confirm(
      `Do you want to delete todo: ${$(todo)
        .children(".todo-content")
        .children(".input-todo-text")
        .val()}`
    );

    if (result) {
      actDelete();
    }
  } else {
    actDelete();
  }

  function actDelete() {
    let id = $(todo).data("id");
    fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          $(todo).remove();
          countTodos();
        } else {
          const err = new Error("HTTP status code " + res.status);
          throw err;
        }
      })
      .catch((error) => {
        alert(`Cann't delete todo id = ${id}! \n${error}`);
      });
  }
}

function updateTodo(todo) {
  let id = $(todo).data("id");
  let title = $(todo)
    .children(".todo-content")
    .children(".input-todo-text")
    .val();
  let completed =
    $(todo)
      .children(".todo-content")
      .children(".todo-status")
      .attr("checked") === undefined
      ? false
      : true;

  fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
    method: "PUT",
    body: JSON.stringify({
      userId: 1,
      completed: completed,
      title: title,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        const err = new Error("HTTP status code " + res.status);
        throw err;
      }
    })
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => {
      $($(todo).find(".input-todo-text")).val(oldTitleTodo);
      $($(todo).find(".todo-status")).prop("checked", !completed);
      alert(`Cann't update todo id = ${id} with title: ${title}! \n${error}`);
    });
}
