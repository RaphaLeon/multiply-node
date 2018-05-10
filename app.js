const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { createFile, listTable } = require('./multiply/multiply');

let command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.b, argv.l);
        break
    case 'create':
        createFile(argv.base || argv.b, argv.l)
            .then(file => { console.log(`file created: ${ colors.green(file) }`) })
            .catch(err => { console.log(err) })
        break;
    default:
        console.log(`command not found`);
}