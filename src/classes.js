class Demo {
    constructor(initialValue){
        this.x = initialValue;
    }
    growUp(){
        this.x++;
    }
}

const privateField = Symbol("privateField");
const privateField2 = Symbol("privateField");

class Derived extends Demo{
    constructor(initialValue){
        initialValue++;
        super(initialValue);
        this.y = initialValue;
        this[privateField] = 100;

    }

    get privateData(){
        return this[privateField];
    }

    *[Symbol.iterator](){
        yield 4;
        yield 5;
        yield 6;
        return 7;
    }
}

let data = new Derived();
for(let val of data){
    val = 100;
}

for(const val of data){
    console.log(val);
}

console.log(data.privateData);
