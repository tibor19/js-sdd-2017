class Demo {
    constructor(initialValue){
        this.x = initialValue;
    }
    growUp(){
        this.x++;
    }
}

class Derived extends Demo{
    constructor(initialValue){
        initialValue++;
        super(initialValue);
        this.y = initialValue;
    }
}

let data = new Derived();