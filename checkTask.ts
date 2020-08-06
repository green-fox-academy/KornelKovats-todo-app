import fs = require("fs");

export function checkTask(myArgs){
    // Check task
    let tasksLength = fs
    .readFileSync("./files/list-todo.txt", "utf-8")
    .split("\n").length;
  if (
    myArgs[2] == "-c" &&
    process.argv.length === 4 &&
    parseInt(myArgs[3]) > 0 &&
    parseInt(myArgs[3]) < tasksLength
  ) {
    let allLines = fs
      .readFileSync("./files/list-todo.txt", "utf-8")
      .split("\n");
    let newCheckedLines = allLines.map((value, index) => {
      if (index + 1 == parseInt(myArgs[3]) && value != "" && value[0] != "*") {
        return "*" + value;
      } else {
        return value;
      }
    });
    let newLines = "";
    newCheckedLines.forEach((value, index) => {
      if (value != "" && index != newCheckedLines.length) {
        return (newLines += value + "\n");
      }
    });
    fs.writeFileSync("./files/list-todo.txt", newLines, "utf-8");
  } else if (
    myArgs[2] == "-c" &&
    process.argv.length === 4 &&
    parseInt(myArgs[3]) < 0
  ) {
    throw new Error("Unable to remove: index is out of bound");
  } else if (
    myArgs[2] == "-c" &&
    process.argv.length === 4 &&
    parseInt(myArgs[3]) > tasksLength
  ) {
    throw new Error("Unable to remove: index is out of bound");
  } else if (
    myArgs[2] == "-c" &&
    process.argv.length === 4 &&
    typeof myArgs[3] != "number"
  ) {
    throw new Error("Unable to remove: index is not a number");
  } else if (myArgs[2] == "-c" && process.argv.length === 3) {
    throw new Error("Unable to add: no index provided");
  }
}