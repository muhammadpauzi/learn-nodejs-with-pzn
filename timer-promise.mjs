import timers from "timers/promises";

// console.log(new Date());
// await timers.setTimeout(5000);
// console.log(new Date());

// for await (const startTime of timers.setInterval(1000, new Date())){
// console.log(`Start time at ${startTime}`);
// }
// for await (const startTime of timers.setInterval(1000, null)) {
//   console.log(`Start time at ${new Date()}`);
// }

const res = await timers.setImmediate(new Date());
console.log(res);
