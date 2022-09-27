require('colors');

const showMenu = () => {
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

    readLine.question('Choose an option', (opt) => {
        console.log({opt});
        readLine.close();
    })
}

module.exports = {
    showMenu
}