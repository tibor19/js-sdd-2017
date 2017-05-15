let numbers = [1, 2, 3];

let iterator = numbers.values();

for(let val of iterator){
    console.log(val);
}

function wrongReturn(){
    return { a: 20, b: 30 };
}

let result = wrongReturn();