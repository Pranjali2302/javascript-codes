let a = [2,5,1,3,4]
let max1 = a[0]
let max2=a[0];
for(let i=1;i<a.length;i++){
    if(a[i] > max1){
        max1 = a[i]
    }
    if(a[i] < max1 && a[i] > max2){
        max2= a[i]
    }
}
console.log(max1,max2)