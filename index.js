
//Создание кнопки закрыть для каждого дела
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let container = document.getElementById("myUL");
let addButton = document.getElementById("add-button");
let input = document.getElementById("myInput")
render();

container.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
        let todoID = Number(event.target.getAttribute("data-id"));
        todos.splice(todoID, 1);
        render();
        saveToLocalStorage()
    }
});

addButton.addEventListener("click", () => {
    console.log(input.value)
    const value = input.value;
    if (!value) {
        alert("Невозможно добавить пустое значение");
        return;
    }
    todos.push(value);
    render();
    saveToLocalStorage();
})

function render(){
    var l = document.getElementById("myUL");
    let newInnerHtml = todos.reduce((prev, current, index) => {
        let newValue = `<li>
            <span>${current}</span>
            <button data-id=${index}>Удалить<button>
        </li>`;
        return prev + newValue;

    }, "");
   l.innerHTML =newInnerHtml;
}

function saveToLocalStorage(){
    localStorage.setItem("todos",JSON.stringify(todos));
}