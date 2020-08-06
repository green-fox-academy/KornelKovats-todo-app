import fs = require("fs");
  // print all usage
  export function printAllUsage(myArgs: string[]){
    if (myArgs.length === 2) {
      let noArgumentString = fs.readFileSync("./files/print.txt", "utf-8");
      console.log(noArgumentString);
    }
  }
 