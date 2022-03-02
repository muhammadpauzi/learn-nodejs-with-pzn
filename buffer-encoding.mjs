const buffer = Buffer.from("Muhammad Pauzi", "utf-8");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"));

const bufferBase64 = Buffer.from('TXVoYW1tYWQgUGF1emk=', 'base64');
console.log(bufferBase64.toString("utf-8"));
console.log(bufferBase64.toString("ascii"));