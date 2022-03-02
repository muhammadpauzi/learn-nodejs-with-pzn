import net from "net";

const server = net.createServer((client) => {
  console.log(
    `Client connected! with IP ${client.remoteAddress}/${client.remoteFamily}/${client.remotePort}`
  );
  client.on("data", (data) => {
    console.log(`Recived data ${data.toString()}`);
    client.write(`Hello ${data.toString()}\r\n`);
  });
});

server.listen(5000, "localhost", () => {
  console.log("Server is running...");
});
