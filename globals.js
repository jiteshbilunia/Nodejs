// globals of node js
// __dirname - path to curr directory
// __filename - file name
// require - function to use modules
// module - info about current module
// process - info about env where the program is being created
console.log(__dirname);
myId = setInterval(()=>{
    console.log("Hello world");
}, 1000);
clearInterval(myId);
