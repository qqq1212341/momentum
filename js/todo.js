const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const localList = JSON.parse(localStorage.getItem("todos"));

let toDos = [];



function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    console.log(toDos);
    saveToDos();
    li.remove();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.classList.add("spanInnerText");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("listButton");
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (localList.length > 0){
    toDos = localList;
    localList.forEach(paintToDo);
}