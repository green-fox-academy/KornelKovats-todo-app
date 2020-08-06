import { Item } from "./item";


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