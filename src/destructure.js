var person = {
    name: 'Tibi',
    age: 44,
    address: {
        city: 'Tenerife'
    }
}

var {name: x, tibi = 'Tibi'} = person;

function test({name, tibi}){
    console.log(name);
    console.log(tibi);
}

export function run(){ 
    test(person);
}

