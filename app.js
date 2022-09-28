import colors from 'colors'
import {inquirerMenu, pause} from './helpers/inquirer.js'


const main = async() =>{
    console.log('Hello World');

    let opt = '';

    do {
        opt = await inquirerMenu();
        await pause();
    }
    while( opt !== '0');
}

main();