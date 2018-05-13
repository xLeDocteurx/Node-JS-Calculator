/*
var argv = require('yargs')
    .usage('Usage: $0 --[add/substract/multiply/divide] -x [int] -y [int]')
    .demand(['x','y'])
    .argv;



if (argv.add) {
    require('./add');
} else if (argv.substract) {
    require('./substract');
} else if (argv.multiply) {
    require('./mult');
} else if (argv.divide) {
    require('./divide');
}
*/


/*
var add = require('./add');
var substract = require('./substract');
var multiply = require('./mult');
var divide = require('./divide');
*/

var argv = require('yargs')
    .usage('Usage: $0 [command] [number1] [number2]')
    
    .command({
    command: 'add [number] [number]',
    aliases: ['add','ad'],
    desc: 'Add one number to another',
//    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
        require('./add.js');        
    }
    })

    .command({
    command: 'substract [number] [number]',
    aliases: ['substract','sub'],
    desc: 'substract one number by another',
//    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
        require('./substract');
    }
    })
    
    .command({
    command: 'multiply [number] [number]',
    aliases: ['multiply','mult'],
    desc: 'multiply one number by another',
//    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
        require('./mult');       
    }
    })
    
    .command({
    command: 'divide [number] [number]',
    aliases: ['divide','div'],
    desc: 'divide one number by another',
//    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
        require('./divide');        
    }
    })

    .help()
    .argv;

