import process from 'process';

process.report.reportOnFatalError = true;
process.report.reportOnsignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

function sampleError(){
    throw new Error("Oops...");
}

sampleError();