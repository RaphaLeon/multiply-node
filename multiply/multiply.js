const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {
    console.log('========================'.green);
    console.log(`Table of ${base}`.blue);
    console.log('========================'.green);

    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${ base * i }`);
    }
}

let createFile = (base, limit = 10) => {
    console.log(`Base received: ${base}`);
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`a number was expected, '${base}' was received.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`tables/table-${base}-to-${limit}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`${base}-to-${limit}.txt`);
        });
    });
}

module.exports = {
    createFile,
    listTable
}