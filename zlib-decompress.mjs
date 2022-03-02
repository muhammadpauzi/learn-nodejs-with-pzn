import fs from "fs/promises";
import zlib from "zlib";

const bufferSource = await fs.readFile("./zlib-compress.mjs.txt");
console.log(bufferSource.toString());
const result = zlib.unzipSync(bufferSource);
console.log(result.toString());
