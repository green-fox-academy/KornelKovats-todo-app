import fs = require("fs");  
  
  // remove the provided tasks
  export function removeTask(myArgs){
    let tasksLength = fs
    .readFileSync("./files/list-todo.txt", "utf-8")
    .split("\n").length;
  if (
    myArgs[2] == "-r" &&
    process.argv.length === 4 &&
    parseInt(myArgs[3]) > 0 &&
    parseInt(myArgs[3]) < tasksLength
  ) {
    let allLines = fs
      .readFileSync("./files/list-todo.txt", "utf-8")
      .split("\n");
    let newLinesIthoutGivenLines = allLines.filter((value, index) => {
      if (index + 1 != parseInt(myArgs[3]) && value != "") {
        return value + "\n";
      }
    });
    let newLines = "";
    newLinesIthoutGivenLines.forEach((value, index, array) => {
      if (index == newLinesIthoutGivenLines.length - 1) {
        return (newLines += value);
      } else {
        return (newLines += value + "\n");
      }
    });
    fs.writeFileSync("./files/list-todo.txt", newLines, "utf-8");
  } else if (
    myArgs[2] == "-r" &&
    process.argv.length === 4 &&
    parseInt(myArgs[3]) < 0
  ) {
    throw new Error("Unable to remove: index is out of bound");
  } else if (
    myArgs[2] == "-r" &&
    process.argv.length === 4 &&
    parseInt(myArgs[3]) > tasksLength
  ) {
    throw new Error("Unable to remove: index is out of bound");
  } else if (
    myArgs[2] == "-r" &&
    process.argv.length === 4 &&
    typeof myArgs[3] != "number"
  ) {
    throw new Error("Unable to remove: index is not a number");
  } else if (myArgs[2] == "-r" && process.argv.length === 3) {
    throw new Error("Unable to add: no task provided");
  }

  }
  