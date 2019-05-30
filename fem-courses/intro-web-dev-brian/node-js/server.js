const http = require('http');

const server = http.createServer(function(req, res) {
    console.log(`user visited ${req.url}`);
    res.end("hello!");
})

/* essa função vai ser executada toda vez que o server receber uma requisição */

console.log("listening on http://localhost:3000");
server.listen(3000);
