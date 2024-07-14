const http = require("node:http");

const server = http.createServer();
server.listen(8000);
server.on("listening", () => console.log("Server start at port 8080"));
server.on("error", (error) => console.error("from server", error));

server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain ; charsset=utf-8" });
  if (req.method === "GET")
    return res.end("Hello world!", () => console.log("I've respond"));
});
