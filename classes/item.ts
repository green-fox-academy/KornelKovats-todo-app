export class Item{
    public thing: string;

    public checked: boolean;

    constructor(thing:string, checked: boolean=false){
        this.thing = thing;
        this.checked = checked;
    }

    public getLine(){
        return this.thing;
    }
    public getChecked(){
        return this.checked;
    }
}