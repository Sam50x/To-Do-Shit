const input = document.querySelector('#task')
const addTaskBtn = document.querySelector('#add-btn')
const tasksContainer = document.querySelector('.task-containers')

addTaskBtn.addEventListener('click', ()=>{
    let task = document.createElement('div')
    task.classList.add("task-container")

    let li = document.createElement('li')
    li.innerText = `${input.value}`
    
    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = `<i class="fas fa-check" id="check">`

    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="fas fa-trash-can" id="trash">`

    task.appendChild(li)
    task.appendChild(checkBtn)
    task.appendChild(deleteBtn)

    if (input.value === ''){
        alert('U know u need to add a task to add a task right?')
    }
    else{
        tasksContainer.appendChild(task)
    }


    input.value = ''

    checkBtn.addEventListener('click', () =>{
        checkBtn.parentElement.style.textDecoration = 'line-through'
    })

    deleteBtn.addEventListener('click', () =>{
        deleteBtn.parentElement.remove()
    })
    
})