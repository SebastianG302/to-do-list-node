import {v4 as uuid4} from 'uuid';

class Task {
    constructor(description){
        this.id = uuid4();
        this.description = description;
        this.completeOn = null;
    }
}

export{
    Task
}