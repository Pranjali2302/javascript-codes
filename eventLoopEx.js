console.log('a')
setTimeout(()=>{console.log('set timeout')},0)
Promise.resolve(()=>console.log('promise')).then((res)=> res())
console.log('b')

//ouput
//a
//b
//promise
//set timeout

//console.log is sync call so directly goes to call stack n execute
//settimeout is web api so goes to task queue to complete the given time
//promise also web api bt will go to micro-task queue i.e. high-priority task queue
//so once console.log executed promise.resolve will pushed to call stack n executes then setTimeout() pushed to call stack & executes