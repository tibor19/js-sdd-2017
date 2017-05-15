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

export function run(){
    
    scopeLet();
    scopeVar();
    console.log(c);
}
