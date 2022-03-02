import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("hello", (data) => {
  console.log(`Hello ${data?.name}`);
});
emitter.addListener("hello", (data) => {
  console.log(`Hello ${data?.name}`);
});

emitter.emit("hello", { name: "pauzi" });
