/**
    * TODO:
    * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
    * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');
const { resolve } = require('path');

const rs = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
});

const ws = fs.createWriteStream(resolve(__dirname, 'output.txt'));

rs.on('readable', () => {
    try {
        ws.write(`${rs.read()}\n`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

rs.on('end', () => {
    ws.end();
});
