import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.on("message", (data) => {
  console.log(
    `Thread-${threadId} receive from worker with threadId 1 : ${data}`
  );
});
worker2.on("message", (data) => {
  console.log(
    `Thread-${threadId} receive from worker with threadId 2 : ${data}`
  );
});

worker1.postMessage(10);
worker2.postMessage(10);

console.log("Hello...");
