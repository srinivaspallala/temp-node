const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Welcome to Home Page')
    }
    if(req.url == '/about'){
        res.end('Here is our shot history')
    }

   res.end(`
   <h1>Oops!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">Back`)
//     console.log(req)
// res.write('Welcome to our home page');
// res.end();
})

server.listen(5000);