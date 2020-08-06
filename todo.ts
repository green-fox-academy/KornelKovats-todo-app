#! /usr/bin/env ts-node
import fs = require('fs');
import readline = require('readline');
import { error } from 'console';

let myArgs = process.argv.slice();
// print all usage
if(process.argv.length===2){
    let noArgumentString = fs.readFileSync('./files/print.txt','utf-8');
    console.log(noArgumentString);
}
// Argument error handling
if(process.argv.length===3 && (myArgs[2]!=='-l' && myArgs[2]!=='-a' && myArgs[2]!=='-r' && myArgs[2]!=='-c')){
    console.log('Unsupported argument');
}
// print all tasks
if(myArgs[2]=='-l'&&process.argv.length===3){
    const allText = fs.readFileSync('./files/list-todo.txt','utf-8').split('\n');
    const rl = readline.createInterface({
        input: fs.createReadStream('./files/list-todo.txt'),
        output: process.stdout,
        terminal: false
    });
    if(allText.length==0){
        console.log('No todos for today! :)');
    }else{
        let index = 1
        rl.on('line',(line)=>{
            if(line[0]==='*'){
                console.log(`${index}. - [x] ${line.slice(1,line.length)}`);
            }else{
                console.log(`${index}. - [ ] ${line}`);
            }
            
            index++;
        })
    }
}
// adding new task
if(myArgs[2]=='-a'&&process.argv.length===4){
    let addTask= fs.appendFileSync('./files/list-todo.txt',myArgs[3] + '\n','utf-8');
}else if(myArgs[2]=='-a'&&process.argv.length===3){
    console.log('Unable to add: no task provided');
}

// remove the provided tasks
let tasksLength= fs.readFileSync('./files/list-todo.txt','utf-8').split('\n').length;
if(myArgs[2]=='-r'&&process.argv.length===4 && parseInt(myArgs[3])>0 &&parseInt(myArgs[3])<tasksLength){
    let allLines = fs.readFileSync('./files/list-todo.txt','utf-8').split('\n');
    let newLinesIthoutGivenLines = allLines.filter((value,index)=>{
        if((index+1)!=parseInt(myArgs[3])&&value!=''){
            return value + '\n';
        }
    })
    let newLines = '';
    newLinesIthoutGivenLines.forEach((value,index,array)=>{
        if(index==newLinesIthoutGivenLines.length-1){
            return newLines +=value;
        }else{
            return newLines +=value + '\n';
        }
    })
    fs.writeFileSync('./files/list-todo.txt',newLines,'utf-8');
}else if(myArgs[2]=='-r'&&process.argv.length===4&& parseInt(myArgs[3])<0){
    console.log('Unable to remove: index is out of bound');
}else if(myArgs[2]=='-r'&&process.argv.length===4&& parseInt(myArgs[3])>tasksLength){
    console.log('Unable to remove: index is out of bound');
}else if(myArgs[2]=='-r'&&process.argv.length===4&&(typeof myArgs[3])!='number'){
    console.log('Unable to remove: index is not a number');
}else if(myArgs[2]=='-r'&&process.argv.length===3){
    console.log('Unable to add: no task provided');
}

// Check task

if(myArgs[2]=='-c'&&process.argv.length===4 && parseInt(myArgs[3])>0 &&parseInt(myArgs[3])<tasksLength){
    let allLines = fs.readFileSync('./files/list-todo.txt','utf-8').split('\n');
    let newCheckedLines = allLines.map((value,index)=>{
        if((index+1)==parseInt(myArgs[3])&&value!=''&&value[0]!='*'){
            return '*' + value;
        }else{
            return value
        }
    })
    let newLines = '';
    newCheckedLines.forEach((value,index)=>{
        if(value!=''&&index!=newCheckedLines.length){
            return newLines +=value +'\n';
        }
        
    })
    fs.writeFileSync('./files/list-todo.txt',newLines,'utf-8');
}