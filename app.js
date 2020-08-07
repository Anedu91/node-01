// requireds
const {argv} = require('./config/yargs');
const colors = require('colors');
const {createFile, listarTable} = require('./multiplicar/multi');


let command = argv._[0];

switch(command){
    case 'listar':
        listarTable(argv.base,argv.limite)
    break;

    case 'crear':
     createFile(argv.base, argv.limite)
        .then(file => console.log(`Created file: ${file}`.rainbow))
        .catch(e => console.log(e))
    break;

    default:
        console.log('comando no reconocido');
}

// let argv2 = process.argv;
// let parameter = argv[2];
// let base = parameter.split('=')[1]




