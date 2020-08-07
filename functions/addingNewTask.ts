  // adding new task
  import fs = require("fs");
  import { ToDoList } from "../classes/todoListClass";
  import { Item } from "../classes/item";

  export function addingNewTask(myArgs:any[],newtask:string){
    const ArrayOfToDoObjects = new ToDoList(myArgs);
    ArrayOfToDoObjects.lines.push(new Item(newtask));
    let string = '';
    ArrayOfToDoObjects.lines.forEach((value,index)=>{
      if(index!=ArrayOfToDoObjects.lines.length-1){
        string += value.getLine() + '\n';
      }else{
        string += value.getLine();
      }
    });
    fs.writeFileSync('./files/list-todo.txt',string);
  }
 