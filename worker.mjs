import { threadId, parentPort } from "worker_threads";

parentPort.on("message", (data) => {
  for (let i = 0; i < data; i++) {
    console.log(`Thread-${threadId} send message : ${i}`);
    parentPort.postMessage(i);
  }
  parentPort.close();
});
