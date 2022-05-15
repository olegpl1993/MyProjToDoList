'use strict'

//массив дел(обьектов)
let toDoList = [];

//удаления из списка
toDoBox.addEventListener("click", function (event) {
    if (event.target.className !== "buttonDone") {//проверка куда нажали
        return;
    }
    const id = event.target.id;
    for (let i = 0; i < toDoList.length; i++) { //меняет статус на false
        if (toDoList[i].id === id) {
            toDoList[i].status = false;
        }
    }
    render();
});

//добавление дел в список
buttonInput.onclick = function () {
    toDoList.push({
        toDo: toDoInput.value,
        status: true,
        id: String(Math.random())
    });
    render();
    toDoInput.value = ""; // очистка строки ввода 
}

//функция вывода
function render() {
    toDoBox.innerHTML = ""; //Очищает поле перед рендером
    //выводит список дел
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].status === true) {
            toDoBox.innerHTML += `<div class="todosRow">
        <div class="case">${toDoList[i].toDo}</div>
        <div class="buttonDone" id="${toDoList[i].id}">Выполнить</div>
    </div>`;
        }
    }
    //выводит список выполненых дел
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].status === false) {
            toDoBox.innerHTML += `<div class="todosRow">
        <div class="case">${toDoList[i].toDo}</div>
        <div class="caseDone">Выполнено</div>
    </div>`;
        }
    }
}


