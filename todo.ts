#! /usr/bin/env ts-node
import fs = require("fs");
import { printAllUsage } from "./printAllUsage";
import { checkArguments } from "./argumentErrorHandling";
import { printAllTask } from "./printAllTask";
import { addingNewTask } from "./addingNewTask";
import { removeTask } from "./removeTask";
import { Item } from "./item";
import { ifError } from "assert";

export class ToDoList{
  public lines: Item[] = [];

  constructor(allText: string[]){
      allText.forEach((value) =>{
        if(value[0]=='*'&&value!=''){
          let newItem = new Item(value.slice(1,value.length-1),true);
          this.lines.push(newItem);
        }else if(value!=''){
          let newItem = new Item(value,false);
          this.lines.push(newItem);
        }
      })
  }
}
const allText = fs.readFileSync("./files/list-todo.txt", "utf-8").split("\n");


let args = process.argv.slice(2)

if(args.length===0){
  console.log(printAllUsage());
}

