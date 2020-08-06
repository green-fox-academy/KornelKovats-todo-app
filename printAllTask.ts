import fs = require("fs");
import readline = require("readline");

export function printAllTask(myArgs:string[]) {
      // print all tasks
  if (myArgs[2] == "-l" && process.argv.length === 3) {
    const allText = fs
      .readFileSync("./files/list-todo.txt", "utf-8")
      .split("\n");
    const rl = readline.createInterface({
      input: fs.createReadStream("./files/list-todo.txt"),
      output: process.stdout,
      terminal: false,
    });
    if (allText.length == 0) {
      console.log("No todos for today! :)");
    } else {
      let index = 1;
      rl.on("line", (line) => {
        if (line[0] === "*") {
          console.log(`${index}. - [x] ${line.slice(1, line.length)}`);
        } else {
          console.log(`${index}. - [ ] ${line}`);
        }
        index++;
      });
    }
  }
}