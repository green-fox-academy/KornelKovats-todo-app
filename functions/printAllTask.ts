import { ToDoList } from "../classes/todoListClass";

export function printAllTask(myArgs:any[]) {
      // print all tasks
      const ArrayOfToDoObjects = new ToDoList(myArgs);
      ArrayOfToDoObjects.lines.forEach((value,index)=>{
          if(value.getChecked()==true){
            console.log(`${index+1}. [X] ${value.getLine()}`);
          }else{
            console.log(`${index+1}. [ ] ${value.getLine()}`);
          }
      })
}