import colors from 'colors'
import {inquirerMenu, pause, readInput} from './helpers/inquirer.js'
import { readDB, saveDB } from './helpers/saveFile.js';
import { Tasks } from './models/tasks.js';


const main = async() =>{
    console.log('Hello World');

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if( tasksDB ){
        tasks.loadTasksFromArray(tasksDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description:');
                tasks.createTask(desc);
                saveDB( tasks.listArr )

            break;
        
            case '2':
                console.log(tasks.listArr);
            break;
        }

        

        await pause();
    }
    while( opt !== '0');
}

main();