const container = document.querySelector(".container");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const ul = document.querySelector("#ul");
const msg = document.querySelector(".msg");

//get todos function
const getTodos = () => {
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
};

// message
const createMsg = (text) => {
  msg.textContent = text;
  msg.classList.add(`addMsg`);
  setTimeout(() => {
    msg.textContent = "";
    msg.classList.remove("addMsg");
  }, 1000);
};

const dltMsg = (text) => {
  msg.textContent = text;
  msg.classList.add(`dltMsg`);
  setTimeout(() => {
    msg.textContent = "";
    msg.classList.remove("dltMsg");
  }, 1000);
};

//delete todo
const dltTodo = (event) => {
  const select = event.target.parentElement.parentElement;
  ul.removeChild(select);
  dltMsg("Todo is deleted");
  const todoId = select.id;
  let todos = getTodos();
  todos = todos.filter((todo) => todo.todoId !== todoId);
  localStorage.setItem("mytodos", JSON.stringify(todos));
};

//create todo
const createTodo = (todoId, todoValue) => {
  const li = document.createElement("li");
  li.id = todoId;
  li.innerHTML = `
    <span class="litext"> ${todoValue} </span>
    <span> <button class="libtn" type="submit"> Delete </button> </span>
  `;
  li.classList.add(`li`);
  ul.appendChild(li);
  const libtn = li.querySelector(".libtn");
  libtn.addEventListener("click", dltTodo);
};

// getting input from user
const todoList = (event) => {
  event.preventDefault();
  const todoValue = input.value;
  // creating id for todo list
  const todoId = Date.now().toString();
  //creating todo
  createTodo(todoId, todoValue);
  // message
  createMsg("Todo is added");

  // set data in localstorage
  const todos = getTodos();
  todos.push({ todoId, todoValue });
  localStorage.setItem("mytodos", JSON.stringify(todos));

  // clear input field
  input.value = "";
};

const loadTodo = () => {
  const todos = getTodos();
  todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
};

// adding eventlistener to submit user value
form.addEventListener("submit", todoList);
window.addEventListener("DOMContentLoaded", loadTodo);
