function calc(a,b){
    for(let i=0; i<1000000;i++){}
    return a*b;
}

console.time('calc first call')
console.log(calc(9857,8493));
console.timeEnd('calc first call')

console.time('calc second call')
console.log(calc(9857,8493));
console.timeEnd('calc second call')

//in this fun has same result bt still taking time

//so for this lets memoize the call using caching
//store the res for same calculation then return it

function memoize(fn, context){
    const res = {}
    return function(...args){
        const argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache]
    }
}

function calc1(a,b){
    for(let i=0; i<100000000;i++){}
    return a*b;
}

const memoizeFn = memoize(calc1)

console.time('calc1 first call')
console.log(memoizeFn(99857,8493));
console.timeEnd('calc1 first call')

console.time('calc1 second call')
console.log(memoizeFn(99857,8493));
console.timeEnd('calc1 second call')