export class Demo {
    constructor(private privatename: string){

    }

    get name(){
        return this.privatename;
    }
}