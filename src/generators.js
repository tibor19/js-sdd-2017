function *f() {
  yield 1;
  yield *[2, 3];

  return 4;
}

export function run(){
    let gen = f();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());

    for(let val of f()){
        console.log(val);
    }
} 