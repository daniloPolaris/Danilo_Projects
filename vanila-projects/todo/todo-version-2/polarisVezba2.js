const form = document.querySelector(".enter_task_form");
const writeTask = document.querySelector(".write_task");
const tasksList = document.querySelector(".tasks_list");
const addDate = document.querySelector(".date_picker");

let todos = [];

function onLoad() {
  todos = JSON.parse(localStorage.getItem("TODOS"));
  if (!todos) {
    todos = [];
  }
  renderTodos();
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  saveTodo();
  renderTodos();
});

// moram da ih deklarisem ovde da bi bile vidljive van 'changeFormatOfDate' f-je???
let monthInText;
let day;

function changeFormateOfDate() {
  let oldDateFormat = addDate.value;
  const dateArray = oldDateFormat.split("-")  

  let month = dateArray[1];
  if (month.charAt(0) === '0') {
      month = month.substring(1);
    };
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let monthIndex = month - 1;
  monthInText = monthNames[monthIndex];

  day = dateArray[2];
  };
addDate.addEventListener('change', changeFormateOfDate)


function saveTodo() {
  const text = writeTask.value;
  const date = addDate.value;

  if (text !== "" && date) {
    const todo = {
      textPropertie: text,

      // datePropertie : date,
      monthPropertie : monthInText,
      dayPropertie : day

    };
    todos.push(todo);
    writeTask.value = "";

    addDate.value = "";

    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else {
    alert("Please write a task, and enter the date");
  };
};

function renderTodos() {
  tasksList.innerHTML = "";

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    localStorage.setItem("TODOS", JSON.stringify(todos));
    renderTodos();
  };

  todos.forEach((todo, index) => {
    const node = document.createElement("article");
    const paragraph = document.createElement("p");
    const taskText = document.createTextNode(todo.textPropertie);
    const doneBtn = document.createElement("button");
// kreirana 2 elementa unutar button-a i 2 text noda koje ces da gurnes u ta 2 elementa
    const paragraphMonth = document.createElement("p");
    const paragraphDay = document.createElement("p");
    const paragraphMonthText = document.createTextNode(todo.monthPropertie);
    const paragraphDayText = document.createTextNode(todo.dayPropertie);

    doneBtn.addEventListener("click", () => {
      deleteTodo(index);
    });

    paragraph.classList.add("task_name");
    node.classList.add("one_task");
    doneBtn.classList.add("task_done");
    paragraphMonth.classList.add("month_style");
    paragraphDay.classList.add("day_style");

    paragraph.appendChild(taskText);
    paragraphMonth.appendChild(paragraphMonthText);
    paragraphDay.appendChild(paragraphDayText);
    doneBtn.appendChild(paragraphMonth);
    doneBtn.appendChild(paragraphDay);
    node.appendChild(paragraph);
    node.appendChild(doneBtn);
    tasksList.appendChild(node);
  });
};

onLoad();
