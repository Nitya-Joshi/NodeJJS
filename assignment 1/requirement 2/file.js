// import { readFile } from 'node:fs/promises';
const fs = require('fs');


console.log('__dirname value:', __dirname);

// fs as a variable


const filePath = 'poem.txt';

// a readable stream
const readableStream = fs.createReadStream(`${__dirname}/poem.txt`, { encoding: 'utf8' });


readableStream.on('data', (chunk) => {

    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('File reading completed.');
});

readableStream.on('error', (err) => {
    console.error(`Error reading the file: ${err.message}`);
});


// readfile method


fs.readFile(`${__dirname}/poem.txt`, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n');
    console.log(data);
});
// import { readFile } from 'node:fs/promises';
const fs = require('fs');


console.log('__dirname value:', __dirname);

// fs as a variable


const filePath = 'poem.txt';

// a readable stream
const readableStream = fs.createReadStream(`${__dirname}/poem.txt`, { encoding: 'utf8' });


readableStream.on('data', (chunk) => {

    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('File reading completed.');
});

readableStream.on('error', (err) => {
    console.error(`Error reading the file: ${err.message}`);
});


// readfile method


fs.readFile(`${__dirname}/poem.txt`, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n');
    console.log(data);
});
