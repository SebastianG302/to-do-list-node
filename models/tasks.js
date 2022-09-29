import {Task} from './task.js'

class Tasks {
    constructor(){
        this._list = {}
    }

    createTask( desc = '' ){

        const task = new Task(desc); //crea una nueva tarea del objeto Task (que crea el id automaticamente)
        this._list[task.id] = task; //Añade un nuevo objeto a this.list con el id de la tarea recien creada que contendrá la misma

    }
}

export {
    Tasks
}