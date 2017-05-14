export function run(){
    let document = document || null;
    if(document){
        document.addEventListener('mouseup', function(){
            console.log(this);
        });
    }
}