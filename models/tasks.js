import { Task } from './task.js'

class Tasks {

    _list = {}

    get listArr() {

        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    constructor() {
        this._list = {}
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });

    }

    createTask(desc = '') {
        const task = new Task(desc); //crea una nueva tarea del objeto Task (que crea el id automaticamente)
        this._list[task.id] = task; //Añade un nuevo objeto a this.list con el id de la tarea recien creada que contendrá la misma
    }



    list() {
        console.log('');
        this.listArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const {description, completeOn} = tarea;

            const state = completeOn ? 'Complete'.green : 'Pending'.red;
            console.log(`${idx}. ${description} ${state}`);
        })
    }
}

export {
    Tasks
}