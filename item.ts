export class Item{
    private thing: string;

    private checked: boolean;

    constructor(thing:string, checked: boolean){
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