document.addEventListener("DOMContentLoaded", () => {
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const dueDateInput = document.getElementById("dueDate");
  const addButton = document.getElementById("addButton");
  const sortAscButton = document.getElementById("sortAsc");
  const sortDescButton = document.getElementById("sortDesc");
  const todoList = document.getElementById("todoList");

  let todos = [];

  function addTodo() {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dueDateInput.value;

    if (!title || !dueDate) {
      alert("Title and due date are required!");
      return;
    }

    const todo = {
      id: Date.now(),
      title,
      description,
      dueDate: new Date(dueDate),
      completed: false,
    };

    todos.push(todo);
    renderTodos();
    clearInputs();
  }

  function clearInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
  }

  function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
      if (todo.completed) {
        todoItem.classList.add("completed");
      }

      const title = document.createElement("h3");
      title.textContent = todo.title;

      const description = document.createElement("p");
      description.textContent = todo.description;

      const dueDate = document.createElement("p");
      dueDate.textContent = `Due: ${todo.dueDate.toLocaleString()}`;

      const actions = document.createElement("div");
      actions.classList.add("todo-actions");

      const completeButton = document.createElement("button");
      completeButton.textContent = todo.completed ? "Undo" : "Complete";
      completeButton.addEventListener("click", () => toggleComplete(todo.id));

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => editTodo(todo.id));

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTodo(todo.id));

      actions.appendChild(completeButton);
      actions.appendChild(editButton);
      actions.appendChild(deleteButton);

      todoItem.appendChild(title);
      todoItem.appendChild(description);
      todoItem.appendChild(dueDate);
      todoItem.appendChild(actions);

      todoList.appendChild(todoItem);
    });
  }

  function toggleComplete(id) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      renderTodos();
    }
  }

  function editTodo(id) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      titleInput.value = todo.title;
      descriptionInput.value = todo.description;
      dueDateInput.value = new Date(todo.dueDate).toISOString().slice(0, 16);
      deleteTodo(id);
    }
  }

  function deleteTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    renderTodos();
  }

  function sortTodos(order) {
    todos.sort((a, b) => {
      if (order === "asc") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else {
        return new Date(b.dueDate) - new Date(a.dueDate);
      }
    });
    renderTodos();
  }

  addButton.addEventListener("click", addTodo);
  sortAscButton.addEventListener("click", () => sortTodos("asc"));
  sortDescButton.addEventListener("click", () => sortTodos("desc"));
});
