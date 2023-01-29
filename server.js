const http = require("http");

const server = http.createServer( (req, res) => {
    if (req.url === "/") {
        res.write("<h1>Hello Node!!!!</h1>")
        res.end()
    }
});

server.listen(3000, () => {
    console.log("server is up and running on port 3000");
});