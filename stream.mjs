import fs from 'fs';

const writer = fs.createWriteStream('target.log');

writer.write("Hello 1\n");
writer.write("Hello 2\n");
writer.write("Hello 3\n");
writer.write("Hello 4\n");
writer.end();

const reader = fs.createReadStream('target.log');
console.log(reader.read());
reader.on("data", (data) => {
    console.log("====== WITH EVENT =======");
    console.log(data.toString());
})