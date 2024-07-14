const http = require("node:http");

const req = http.request(
  {
    host: "127.0.0.1",
    port: 8000,
    method: "GET",
  },
  (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("error", (error) => console.error("from get data : ", error));
    res.on("end", () => console.log(data));
  }
);
req.on("error", (error) => console.error("from request", error));
req.end();
