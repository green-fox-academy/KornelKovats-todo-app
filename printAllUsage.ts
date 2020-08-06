import fs = require("fs");

  // print all usage
  export function printAllUsage(){
      let noArgumentString = fs.readFileSync("./files/print.txt", "utf-8");
      return noArgumentString
  }
 