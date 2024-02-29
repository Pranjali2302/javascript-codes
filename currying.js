let multiply = function(x,y){
  console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(3)
let multiplyByThree = multiply.bind(this,3)
multiplyByThree(3)
let sum = function(x,y){
  if(!y){
    return function(y){
        console.log(x+y)
    }
  }else {
    console.log(x+y)
  }
}
sum(2)(10)
sum(2,11)

let sumByTwo = sum(2)
sumByTwo(5)

let sumByTen = sum(10)
sumByTen(5)

let curriedSum = function(a){
  return function(b){
    if(b){
      return curriedSum(a+b)
    }
      return a
  }
}

console.log(curriedSum(3)(4)(8)(9)())
