const addButton = document.querySelector('.addButton')
const container = document.querySelector('.container')
const inputValue = document.querySelector('.input')
const editButton = document.querySelectorAll('.editButton')
const deleteButton = document.querySelectorAll('.deleteButton')

function createInput(todoitem) {
  const input = document.createElement('input')
  input.classList.add('item_input')
  input.value = todoitem
}

function createEditButton() {
  const editBtn = document.createElement('button')
  editBtn.textContent = 'Edit'
  editBtn.classList.add('editButton')
}

function createDeleteButton() {
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  deleteBtn.classList.add('deleteButton')
}

function createTodo() {
  const todoItem = document.createElement('div')
  todoItem.classList.add('item')

  const input = createInput()
  const editBtn = createEditButton()
  const deleteBtn = createDeleteButton()

  container.appendChild(todoItem)
  todoItem.appendChild(input)
  todoItem.appendChild(editBtn)
  todoItem.appendChild(deleteBtn)
}



