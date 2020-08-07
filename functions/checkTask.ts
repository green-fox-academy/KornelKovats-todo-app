import fs = require("fs");
import { ToDoList } from "../classes/todoListClass";

export function checkTask(myArgs:any[],number: string){
    // Check task
    let whichElement;
    let allToDoList = new ToDoList(myArgs);
    if(parseInt(number)!=NaN){
       whichElement = parseInt(number);
       //console.log(whichElement);
    }else{
      throw new Error('Unable to remove: index is not a number');
    }
    if(whichElement<=allToDoList.lines.length && whichElement>=1){
      let string = '';
      allToDoList.lines.forEach((line,index)=>{
        if(index+1 === whichElement && index!=allToDoList.lines.length-1 && line.getChecked() == false){
          console.log('ezaz: ' + whichElement);
          line.checked = true;
          string += `*${line.getLine()}\n`;
        }else if(index+1 === whichElement && index==allToDoList.lines.length-1 && line.getChecked() == false){
          line.checked = true;
          string += `*${line.getLine()}`;
        }else if (index+1 !== whichElement&& index!=allToDoList.lines.length-1){
          if(line.getChecked()==true){
            string += `*${line.getLine()}\n`;
          }else{
            string += `${line.getLine()}\n`;
          }
        }else if(index+1 !== whichElement && index==allToDoList.lines.length-1){
          if(line.getChecked()==true){
            string += `*${line.getLine()}`;
          }else{
            string += `${line.getLine()}`;
          }
        }
      })
      
      fs.writeFileSync('./files/list-todo.txt',string);
    }else{
      throw new Error('Unable to remove: index is out of bound');
    }
    
}