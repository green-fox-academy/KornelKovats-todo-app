  // adding new task
  import fs = require("fs");
  export function addingNewTask(myArgs){
    if (myArgs[2] == "-a" && process.argv.length === 4) {
        let addTask = fs.appendFileSync(
          "./files/list-todo.txt",
          myArgs[3] + "\n",
          "utf-8"
        );
      } else if (myArgs[2] == "-a" && process.argv.length === 3) {
        throw new Error("Unable to add: no task provided");
      }
  }
 