/*
const { people, ages } = require('./modules.js');

console.log(people);
console.log(ages);

const os = require('os');
console.log(os.platform(), os.homedir())
*/

const fs = require('fs');
const readStream = fs.createReadStream('./text1.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./textWritten.txt', { encoding: 'utf8' })

//An event listener for data chunks
//The function parameter is to do stuff when this action occurs
/*
readStream.on('data', (chunk) => {
    writeStream.write("\n-----NEW CHUNK\n");
    writeStream.write(chunk);
    console.log("NEW CHUNK");
    console.log(chunk);
})
*/
//The code above can be easily done with piping (connecting a
//a writeStream to a readStream)
readStream.pipe(writeStream)
