#! /usr/bin/env ts-node
import fs  from "fs";
import { printAllUsage } from "./functions/printAllUsage";
import { printAllTask } from "./functions/printAllTask";
import { addingNewTask } from "./functions/addingNewTask";
import { removeTask } from "./functions/removeTask";
import { checkTask } from "./functions/checkTask";

const allText = fs.readFileSync("./files/list-todo.txt", "utf-8").split("\n");
try {
  let args = process.argv.slice(2)
if(args.length===0){
  console.log(printAllUsage());
}
if(args.length===1&&args[0]=='-l'){
  printAllTask(allText);
}
if(args.length===2&&args[0]=='-a'){
  console.log(addingNewTask(allText,args[1]));
}else if(args.length===1&&args[0]=='-a'){
  throw new Error('Unable to add: no task provided');
}
if(args.length===2&&args[0]=='-r'){
  console.log(removeTask(allText,args[1]))
}else if(args.length===1&&args[0]=='-r'){
  throw new Error('Unable to remove: no index provided');
}if(args.length===2&&args[0]=='-c'){
  console.log(checkTask(allText,args[1]))
}else if(args.length===1&&args[0]=='-c'){
  throw new Error('Unable to remove: no index provided');
}

} catch (error) {
    console.error(error.message);
}
