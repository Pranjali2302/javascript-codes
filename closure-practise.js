//simple example

function outer(){
    let i=10;
    function inner(){
        console.log(i)
    }
    inner()
}
console.log(outer())

function x(){
    let i=10;
    return function y(){
        console.log(i)
    }
}
const z = x()
console.log(z())

//checking scope for closure
let w = 20;
let f;
if(true){
    f = () =>{
        console.log(w)
    }
} 
console.log(f());//it has closure as w:10