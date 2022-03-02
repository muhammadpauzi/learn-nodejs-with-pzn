import fs from 'fs';
import fsPromises from 'fs/promises';

// const buffer = fs.readFileSync('file-system.mjs');
const buffer = await fsPromises.readFile('file-system.mjs');

console.log(buffer.toString());

// fs.writeFileSync('temp.txt', buffer.toString());
await fsPromises.writeFile('temp.txt', "Hello NodeJS");