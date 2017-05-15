function scopeLet(){
    let ab = 20;
    if(true){
        let ab = 10;
        console.log("Let inner ab ", ab);
    }
    console.log("Let outter ab ", ab);
}

function scopeVar(){
    var ab = 20;
    if(true){
        var ab = 10;
        console.log("Var inner ab ", ab);
    }
    console.log("Var outter ab ", ab);
}

const c = 11;

function run(){
    
    scopeLet();
    scopeVar();
    console.log(c);
}

run();

let person = {
    name: 'Tibi',
    age: 44,
    address: {
        city: 'Tenerife',
        country: 'Spain'
    }
}

let {name: n, address: {city, zip = 90210}} 
            = person;

function sendMail({name, address: {city, zip}}){
    console.log(name, city);
    console.log(zip);
}

let arr = [1, 2, 3, 4];

let [, a, b, , d] = arr;
// let [e, f] = person;

function runDestr(){
    sendMail(person);
}

runDestr();