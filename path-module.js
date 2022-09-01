const path = require('path');
const filepath = path.join('/content', 'subfolder', 'test.txt');
//get the base name of file of the path join
console.log(filepath);
const basefile = path.basename(filepath);
console.log(basefile);

// Getting the absolute path
const absolutepath = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutepath);