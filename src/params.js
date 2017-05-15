function argsFunc(a,b){
    console.log("argsFunc called with " + arguments.length + " parameters");
    console.log(a);
    console.log(b);
    let a1 = 1;
    a1 = "string";

    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

function paramsFunc(a, b, ...extras){
    console.log("paramsFunc called with " + extras.length + " extra parameters");
    console.log(a);
    console.log(b);
    console.log(...extras);

    // for(let i = 0; i < extras.length; i++){
    //     console.log(extras[i]);
    // }
} 

export function run(){
    console.log('forest');
    argsFunc(1);
    argsFunc(1, 2, 3);
    paramsFunc(1);
    paramsFunc(1, 2, 3, 4);

    let array1 = [1, 2, 3];
    array1.push(...[4, 5, 6]);
    console.log(array1);
}