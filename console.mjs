import { Console } from "console";
import fs from "fs";

const logWriteStreamFile = fs.createWriteStream("./application.log");

const log = new Console({
  stdout: logWriteStreamFile,
  stderr: logWriteStreamFile,
});

log.log("Hello World");
log.error("Error Log");

const person = {
  firstName: "Muhammad",
  lastName: "Pauzi",
};

log.table(person);
