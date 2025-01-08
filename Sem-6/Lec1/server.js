const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    res.end("Hello");

})
server.listen(4000, '127.0.0.1', () => {
    console.log("Server running at http://127.0.0.1:6000/");
})