import fs = require("fs");  
import { Item } from "../classes/item";
import { ToDoList } from "../classes/todoListClass";
  
  // remove the provided tasks
  export function removeTask(myArgs: string[],number: string){
    let whichElement;
    if(parseInt(number)!=NaN){
       whichElement = parseInt(number);
       console.log(whichElement);
    }else{
      throw new Error('Unable to remove: index is not a number');
    }

    let allToDoList = new ToDoList(myArgs);
    let removedToDoList = new ToDoList([]);
    if(whichElement<=allToDoList.lines.length&&whichElement>=1){
      console.log('ez most fut')
       removedToDoList.lines = allToDoList.lines.filter((line,index)=>{
        if(index+1!=whichElement){
          return line;
        }
      })
      let string = '';
      removedToDoList.lines.forEach((line,index)=>{
        if(index!=removedToDoList.lines.length-1){
          string += line.getLine() + '\n';
        }else{
          string += line.getLine();
        }
      })
      fs.writeFileSync('./files/list-todo.txt',string);
    }else{
      throw new Error('Unable to remove: index is out of bound');
    }

  }
  