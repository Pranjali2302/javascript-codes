let a = [1,1,2,2,3,4,4];

function uniqueArr(a){
    let res = [];
    for(let i=0; i<a.length;i++){
        let exist = false;
        for(let j=0; j<a.length;j++){
            if(a[i] === res[j]){
                exist = true;
            }
        }
        if(!exist){
            res.push(a[i])
        }
    }
    console.log(res)
}
uniqueArr(a)

//filter
function dedupUsingFilterAndIndexOf(a) {
    return a.filter((element, index) => a.indexOf(element) === index);
  }
  
  const b = [1,2,1,2,2];
  console.log(dedupUsingFilterAndIndexOf(b))

//set
let c = [1,2,1,2,2]
  const unique = [...new Set(c)];
  console.log(unique)
