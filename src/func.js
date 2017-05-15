let f1 = (a, b) => {
    console.log(a);
    console.log(b);
}

let f2 = a => a + 1;

function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;
  
  setInterval(() => {
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    console.log(++this.age);
  }, 1000);
}

let obj = {
    data: 15,
    method: function () {
        console.log(this.data);
    }
}

export function run() {
    console.log(f2(2));

    let result = [1, 2, 3].map(x => x * x);
    result.forEach(e => { console.log(e); });
    // console.log(result);

    obj.method();
    let obj2 = {
        data: 20
    }
    obj.method.call(obj2);
    // obj.method();
    
    setTimeout(obj.method, 0);
    
    var p = new Person();
}

window.data = 25;