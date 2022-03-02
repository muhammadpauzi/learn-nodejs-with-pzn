import process from 'process';

process.on("exit", (exitCode) => {
    console.log(`NodeJS exit with code ${exitCode}`);
});

console.log(process.version);
console.table(process.versions);
console.table(process.argv);
console.table(process.report);
console.log(process.env);

process.exit(1);