import {Task} from './task.js'

class Tasks {

    constructor(){
        this._list = {}
    }

    get listArr(){

        const list = [];
        Object.keys(this._list).forEach(key => list.push(this._list[key]));
        return list;
    }

    createTask( desc = '' ){
        const task = new Task(desc); //crea una nueva tarea del objeto Task (que crea el id automaticamente)
        this._list[task.id] = task; //Añade un nuevo objeto a this.list con el id de la tarea recien creada que contendrá la misma
    }

    loadTasksFromArray(tasks = [] ) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
        
    }
}

export {
    Tasks
}