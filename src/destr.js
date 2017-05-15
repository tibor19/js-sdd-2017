export let person = {
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

export function run(){
    sendMail(person);
}