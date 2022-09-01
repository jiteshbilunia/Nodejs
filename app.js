const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.end('Welcome to out page');
    }

    else if(req.url === '/about'){
        // console.log(req.url);
        res.end('Welcome to about page');
    }
    else{
        res.end(`<h1> oops! page not found </h1> <a href = "/"> Home </a>`);
    }
})
server.listen(3000);
// node tutorials