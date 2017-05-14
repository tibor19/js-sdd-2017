class Demo{
    constructor(name){
        this.name = name;
    }
}

export function run(){
    console.log(new Demo('Tibi').name);
}