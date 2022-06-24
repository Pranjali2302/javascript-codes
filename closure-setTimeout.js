for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log('using let- ',i) //0 1 2
    },100)
}

for(var j=0;j<3;j++){
    setTimeout(()=>{
        console.log('using var- ',j) //
    },100)
}

//to make i as block scope using var, using IIME
for(var x=0;x<3;x++){
    ((x)=>{
        setTimeout(()=>{
            console.log('using var with IIME- ',x)
        },100)
    })(x)
} 