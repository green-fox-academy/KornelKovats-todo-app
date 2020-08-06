#! /usr/bin/env ts-node
import fs = require("fs");
import { printAllUsage } from "./functions/printAllUsage";
import { printAllTask } from "./functions/printAllTask";


const allText = fs.readFileSync("./files/list-todo.txt", "utf-8").split("\n");


let args = process.argv.slice(2)

if(args.length===0){
  console.log(printAllUsage());
}

if(args.length===1&&args[0]=='-l'){
  console.log(printAllTask(allText));
}

