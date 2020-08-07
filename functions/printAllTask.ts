import { ToDoList } from "../classes/todoListClass";

export function printAllTask(myArgs:any[]) {
      // print all tasks
      const ArrayOfToDoObjects = new ToDoList(myArgs);
      if(ArrayOfToDoObjects.lines.length==0){
        console.log('No todos for today! :)');
      }else{
        console.log(ArrayOfToDoObjects.lines)
        ArrayOfToDoObjects.lines.forEach((value,index)=>{
          if(value.getChecked()==true){
            console.log(`${index+1}. [X] ${value.getLine()}`);
          }else if(value.getChecked()==false){
            console.log(`${index+1}. [ ] ${value.getLine()}`);
          }
      })
      }

}