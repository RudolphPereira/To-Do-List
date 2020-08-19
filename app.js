// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(e) {
  e.preventDefault();
  // Create toDo Div
  const toDo = document.createElement("div");
  toDo.classList.add("todo");
  todoList.append(toDo);
  //   Create todo li
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  todoItem.innerText = todoInput.value;
  toDo.append(todoItem);
  //   Create complete Btn
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  toDo.append(completeBtn);
  //   Create Trash Btn
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  toDo.append(trashBtn);
  //   Clear todo Input
  todoInput.value = "";
}

function deleteTodo(e) {
  e.preventDefault();
  const item = e.target;
  // Delete Button
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Add transition
    todo.classList.add("fall");
    // Add an Event Listener so that the data is removed after the transiton
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // Complete Button
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
