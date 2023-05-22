// select items

const form = document.querySelector('.enter_task_form');
const writeTask = document.querySelector('.write_task');
// const addTaskBtn = document.querySelector('.add_task_btn');
// const tasksContainer = document.querySelector('.tasks_container');
const tasksList = document.querySelector('.tasks_list');



// variables
let todos = [];


// 'add task' form-a

// klikom na: <button type="submit" class="add_task_btn">ADD</button>, pokrece se f-ja
// da se nebi refresovala stranica nakon klika na dugme 'ADD' ubacuje se argument u f-ju npr. 'event' i zadaje mu se f-ja 'random_naziv_argumenta.preventDefault();'
// potrebno je sacuvati zadatak koji se upisuje u form-u, zato se kreira f-ja 'saveTodo' i kreira se promenljiva koja je niz u koji ce biti smesteni taskovi 'let todos = [];'
// promenljivoj 'const todoValue' dodeljujemo tekst koji smo ukucali u input tako sto pisemo: 'const ime_promenljive = ime_promenljive_pomocu_koje_pristupamo_inputu_iz_html_dokumanta.value'
// kreiramo promenljivu 'const todo' u kojoj cuvamo taskove, a svaki task ce biti objekat
// u niz 'todos' ubacujemo objekte (taskove) pomocu f-je '.push'
// da se nakon klika na dugme ADD ne bi zadrzao naziv vec unesenog taska, setuje se da je vrednost tog inputa jednaka praznom stringu: writeTask.value = '';
// kada smo sacuvali taskove, mozemo da ih renderujemo. Pozivamo f-ju 'renderTodos()' u okviru prve funkcije, a van nje je definisemo
// U okviru renderTodos f-je pozivamo .forEach f-ju koja prolazi kroz niz 'todos' (call back f-ja koja uzima kao prametre elemente iz niza i njihove index-e (redne brojeve))
// Svaki put ce te parametre (todo, index) ubaciti u html pomocu f-je '.innerHTML' i bitno je da se stavi += kako bi se dodavali novi, a prethodni ne bi brisali
// koristi bas back-ticks, a ne navodnike za navodjenje html koda i u samom html kodu na mestu gde pise ime taska stavlja: ${todo.value}
// na ovaj nacin renderuje prethodni niz i dodaje novi clan, tako da kada dodam task2 on izbaci task1 task1 task2, da bi eliminisao taj prethodni niz stavljam na vrh f-je: tasksList.innerHTML = '';



form.addEventListener('submit', function (event) {
    event.preventDefault();
    saveTodo();
    renderTodos();
});

function saveTodo() {
    const todoValue = writeTask.value;
    const todo = {
        value : todoValue
    };
    todos.push(todo);
    writeTask.value = '';
}

function renderTodos() {
    tasksList.innerHTML = '';

    
    // const logTodoText = (index) => {
    //     console.log(todos[index].value)
    // }
    const deleteTodo = (index) => {
        todos.splice(index, 1);
        renderTodos();
      };

    todos.forEach((todo, index) => {
        const node = document.createElement('article')
        const paragraph = document.createElement('p')
        const taskText = document.createTextNode(todo.value)
        const doneBtn = document.createElement('button')
        const btnText = document.createTextNode("DONE")

        // doneBtn.addEventListener('click', () => {logTodoText(index)})
        doneBtn.addEventListener('click', () => {deleteTodo(index)})

        paragraph.classList.add("task_name")
        node.classList.add("one_task")
        doneBtn.classList.add("task_done")

        paragraph.appendChild(taskText)
        doneBtn.appendChild(btnText)
        node.appendChild(paragraph)
        node.appendChild(doneBtn)
        tasksList.appendChild(node)

   })  

}

renderTodos()



