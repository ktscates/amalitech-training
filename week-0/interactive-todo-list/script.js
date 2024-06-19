// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select input fields and buttons
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const dueDateInput = document.getElementById("dueDate");
  const addButton = document.getElementById("addButton");
  const sortAscButton = document.getElementById("sortAsc");
  const sortDescButton = document.getElementById("sortDesc");
  const todoList = document.getElementById("todoList");

  // Array to store to-do items
  let todos = [];

  // Function to add a new to-do item
  function addTodo() {
    // Get the values from the input fields
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dueDateInput.value;

    // Validate that title and due date are provided
    if (!title || !dueDate) {
      alert("Title and due date are required!");
      return;
    }

    // Create a new to-do item object
    const todo = {
      id: Date.now(),
      title,
      description,
      dueDate: new Date(dueDate),
      completed: false,
    };

    // Add the new to-do item to the array
    todos.push(todo);
    // Render the updated list
    renderTodos();
    // Clear the input fields
    clearInputs();
  }

  // Function to clear the input fields
  function clearInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
  }

  // Function to render the to-do items in the DOM
  function renderTodos() {
    // Clear the existing to-do items
    todoList.innerHTML = "";

    // Loop through each to-do item and create DOM elements
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

  // Function to toggle the completion status of a to-do item
  function toggleComplete(id) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      renderTodos();
    }
  }

  // Function to edit a to-do item
  function editTodo(id) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      // Populate the input fields with the current values of the item
      titleInput.value = todo.title;
      descriptionInput.value = todo.description;
      dueDateInput.value = new Date(todo.dueDate).toISOString().slice(0, 16);
      // Delete the item from the list so it can be re-added after editing
      deleteTodo(id);
    }
  }

  // Function to delete a to-do item
  function deleteTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    renderTodos();
  }

  // Function to sort the to-do items by due date
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

  // Add event listeners to buttons
  addButton.addEventListener("click", addTodo);
  sortAscButton.addEventListener("click", () => sortTodos("asc"));
  sortDescButton.addEventListener("click", () => sortTodos("desc"));
});
