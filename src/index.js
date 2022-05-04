document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let newTask = document.getElementById('new-task-description')
    handleToDo(newTask.value)
    newTask.value = ""
  })
})

function handleToDo(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  let ul = document.getElementById("tasks")

  li.textContent = todo
  btn.innerText = ' X '
  btn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.remove()
  })
  li.append(btn)
  ul.append(li)
}


