
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const taskForm = document.querySelector('#create-task-form')
  const taskUl = document.querySelector('#tasks')


  taskForm.addEventListener('submit', function submitForm(event) {
     event.preventDefault()
     const userInputField = event.target.querySelector('#new-task-description')
     const newLi = document.createElement('li')
     taskUl.appendChild(newLi).innerText = userInputField.value
   });

   const taskLi = document.getElementsByTagName('li')
   taskUl.addEventListener('click', function(e){

     console.log(taskUl)
     console.log(taskLi)

     taskUl.removeChild(taskLi[0])

   })
});
