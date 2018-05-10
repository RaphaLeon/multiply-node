const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'Print in console the multiplication table', options)
    .command('create', 'Create file with result from multiplication', options)
    .help()
    .argv;

module.exports = {
    argv
}