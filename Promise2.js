
const cart =['shoes','mobiles']

const promise= createOrder(cart)
promise
  .then(function(orderId){
    console.log(orderId)
    return orderId;
  })
  .then(function(orderId){
    return proceedToPayment(orderId)
  })
  .then(function(paymentInfo){
    console.log("payment-",paymentInfo)
  })
  .catch(function(err){
    console.log(err.message)
  })
  .then(function(){
    console.log("this will always happen")
  });

function createOrder(cart){
  const pr =new Promise(function(resolve,reject){
    if(!validateCart()){
      const err = new Error('Cart Not Found')
      reject(err)
    }
    const orderId=12345;
    setTimeout(function(){
      resolve(orderId)
    },5000)
   
  })
  return pr;
}
function validateCart(){
  return true
}
function proceedToPayment(orderId){
  return new Promise(function(resolve,reject){
    let res= "payment successful for " + orderId;
    resolve(res)
  })
}
