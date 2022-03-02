import http from "http";

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  if (request.method === "POST") {
    request.on("data", (data) => {
      response.setHeader("Content-Type", "application/json");
      response.write(data);
      response.end();
    });
  } else {
    response.write("Hello HTTP Server World");
    switch (request.url) {
      case "/hello":
        response.write("Hello Page");
        break;
      default:
        response.write("Default Page");
        break;
    }
    response.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running...");
});
