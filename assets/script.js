//Constantes

const dateNumber = document.getElementById('dateNumber')
const dateText = document.getElementById('dateText')
const dateMonth = document.getElementById('dateMonth')
const dateYear = document.getElementById('dateYear')

//tasks container - Donde se van a alojar c/u de las tareas

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleString('es' , {weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es', {month: 'short'})
    dateYear.textContent = date.toLocaleString('es', {year:'numeric'});
};

const addNewTask = event => {
    event.preventDefault(); //para prevenir que el form nos lleve a otra pagina
    const { value } = event.target.taskText;
        if(!value) return; //si no hay value y el usuario quiere agregar una no se agregue vacia. 
        const task = document.createElement('div');
        task.classList.add('task', 'roundBorder');
        task.addEventListener('click', changeTaskState) //llamo a la funcion changeTaskState , 
        task.textContent = value;
        tasksContainer.prepend(task);
        event.target.reset();
};


function changeTaskState(event) {
    event.target.classList.toggle('done'); //accedo a la lista de clases del elemento; si no tiene la clase done, agregarla, si la tiene sacarla.
};


//ORDENAR TAREAS
const order = () => {
    const done = [];
    const toDo =[];
    tasksContainer.childNodes.forEach( el => {  //accedo a c/u de los hijos de taskContainer y utilizo forEach que va a aiterar c/u de esos elementos
        el.classList.contains('done') ? done.push(el) : toDo.push(el); //si el elemento tiene el string done, voy a array done sino al toDo. 
    })
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el));  //llama al boton ordenar, itero el array y lo agrego al taskContainer
}

setDate(); 
