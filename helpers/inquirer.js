import colors from 'colors'
import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'select an option',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create task`
            },
            {
                value: '2',
                name: `${'2.'.green} Display all tasks`
            },
            {
                value: '3',
                name: `${'3.'.green} Display completed tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} Display pending tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete task(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            },
        ]
    }
]


const inquirerMenu = async() => {
    console.clear();
    console.log('======================='.green);
    console.log("      TODO app".white);
    console.log('=======================\n'.green);

    const { option } = await inquirer.prompt(questions);

    return option
}

const pause = async() =>{
    console.log('\n')
    await inquirer.prompt([{
        type: 'input',
        message: `Press ${'ENTER'.green} to continue...`,
        name: 'input'
    }]);
}


const readInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ){
                if (value.length === 0)
                    return '¡Enter a valid value!'
                return true
            }
        }
    ];

    const { description } = await inquirer.prompt(question);

    return description
}



export{
    inquirerMenu,
    pause,
    readInput
}