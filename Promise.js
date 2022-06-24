let promise = new Promise((res,rej)=>{
  setTimeout(()=>{
    // res('resolved');
    rej('rejected');
  },100)
})

promise
  .then(res=>console.log('res -> ',res))
  .catch(rej=>console.log('rej -> ',rej))