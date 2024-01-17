
//Создание кнопки закрыть для каждого дела
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2713");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Нажатие на кнопку закрыть для того чтобы скрыть выбранное дело
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

//Добавление символа слева от дела, при выборе выполненного дела
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//Добавление нового элемента списка, после нажатия на кнопку добавить
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
        if (inputValue === '') {
            alert("Вы должны что-то написать!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}