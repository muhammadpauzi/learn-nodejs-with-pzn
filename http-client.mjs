import https from "https";

const endpoint = "https://hookb.in/...";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (res) => {
    res.on("data", (data) => {
      console.log(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Muhammad",
  lastName: "Pauzi",
});

request.write(body);
request.end();
