import fs from "fs/promises";
import zlib from "zlib";

const bufferSource = await fs.readFile("./zlib-compress.mjs");
const gzipedResult = zlib.gzipSync(bufferSource);

fs.writeFile("./zlib-compress.mjs.txt", gzipedResult);
