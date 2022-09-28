import colors from colors;

const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('=========================='.green);
        console.log("    Choose an option".green);
        console.log('==========================\n'.green);

        console.log(`${'1'.green}. Create tasks`);
        console.log(`${'2'.green}. Show tasks`);
        console.log(`${'3'.green}. Show complete tasks`);
        console.log(`${'4'.green}. Show pending tasks`);
        console.log(`${'5'.green}. Complete tasks`);
        console.log(`${'6'.green}. Delete tasks`);
        console.log(`${'7'.green}. Exit`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readLine.question('Choose an option ', (opt) => {
            readLine.close();
            resolve(opt)
        })
    })
}

const pause = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });     
        readLine.question(`\nPress ${'ENTER'.green} to continue`, (opt) => {
            readLine.close();
            resolve()
        })
    })
}

module.exports = {
    showMenu,
    pause
}
