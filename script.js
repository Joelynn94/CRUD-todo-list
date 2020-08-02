const container = document.querySelector('.container')
const userInput = document.querySelector('.user_input')
const form = document.querySelector('.form')

let todoListArray = []

form.addEventListener('submit', (event) => {
  // Prevent default behaviour
  event.preventDefault();
  // Give item a unique ID
  let itemId = String(Date.now())
  // Get/assign input value
  let todoItem = userInput.value
  console.log(todoItem)
  // Pass ID and item into functions
  addItemToDOM(itemId, todoItem)
  addItemToArray(itemId, todoItem)
  console.log(todoItem)

  // Clear the input box (this is default behaviour but we got rid of that)
  userInput.value = '';
})

function createTodoDiv() {
  // create item div 
  const todoDiv = document.createElement('div')
  // add 'item' class for styling
  todoDiv.classList.add('item')

  return todoDiv
}

function createInput(itemId, todoItem) {
  // create input element 
  const input = document.createElement('input')
  // set a uniquie ID to all inputs
  input.setAttribute('data-id', itemId)
  // add 'item_input' class for styling
  input.classList.add('item_input')
  // add todo item text to input
  input.value = todoItem
  // set disabled to true by default
  input.disabled = true

  return input
}

function createEditButton(buttonText) {
  // create edit button
  const editButton = document.createElement('button')
  // add 'editButton' class for styling
  editButton.classList.add('editButton')
  // set edit button text to 'Edit' by default
  editButton.textContent = buttonText

  return editButton
}

function createDeleteButton(buttonText) {
  // create delete button
  const deleteButton = document.createElement('button')
  // add 'deleteButton' class for styling
  deleteButton.classList.add('deleteButton')
  // set delete button text to 'Delete' by default
  deleteButton.textContent = buttonText

  return deleteButton
}

function addItemToDOM(itemId, todoItem) {
  // call createTodoDiv
  const todoDiv = createTodoDiv()
  // call createInput
  const input = createInput(itemId, todoItem)
  // call editButton and add the desired text
  const editButton = createEditButton('Edit')
  // call deleteButton and add the desired text
  const deleteButton = createDeleteButton('Delete')

  // add todoDiv to the DOM
  container.appendChild(todoDiv)
  // add input to DOM
  todoDiv.appendChild(input)
  // add edit button to DOM
  todoDiv.appendChild(editButton)
  // add delete button to DOM
  todoDiv.appendChild(deleteButton)
}

function addItemToArray(itemId, todoItem) {
  // Add item to array as an object with an ID. So we can find and delete it later
  todoListArray.push({
    id: itemId,
    text: todoItem,
    completed: false,
    disabled: true
  })

  console.log(todoListArray)
}


