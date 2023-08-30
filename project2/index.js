const form = document.querySelector("form");
const input = document.querySelector("#todo-input");
const ul = document.querySelector("#todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value !== "") {
    addTodo();
  }
});

const addTodo = () => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");

  checkbox.type = "checkbox";
  label.textContent = input.value;
  button.textContent = "Delete";

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);
  ul.appendChild(li);

  input.value = "";

  button.addEventListener("click", () => {
    li.remove();
  });
};
