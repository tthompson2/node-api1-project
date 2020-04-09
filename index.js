const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world from Node\n');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://$[hostname]:${port}/');
});

