import net from "net";

const client = net.createConnection({
  port: 5000,
  host: "localhost",
});

client.on("data", (data) => {
  console.log(`Recived data from server : ${data.toString()}`);
});

setInterval(() => {
  client.write("Pauzi\r\n");
}, 2000);
