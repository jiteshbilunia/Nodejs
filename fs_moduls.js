const {readFileSync, writeFileSync } = require('fs');

// This is to read the contents of the file
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);
// This method can create and write in a new file
writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    { flag: 'a'}
    // used to append to the file
)