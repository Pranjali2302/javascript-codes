let s = 'i am moru i am moru moru moru moru'
let res = {}
let ss = s.split(' ');
for(let i=0;i<ss.length;i++){
    if(res[ss[i]]) res[ss[i]] = res[ss[i]] + 1
    else res[ss[i]] = 1
}
console.log(res)