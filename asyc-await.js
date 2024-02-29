import "./styles.css";

const p1 =new Promise((resolve,reject)=>{
  //reject('P1')
  setTimeout(()=>{
    resolve('resolved 1')
  },10000)
})
const p2 =new Promise((resolve,reject)=>{
  //reject('P2')
  setTimeout(()=>{
    resolve('resolved 2')
  },5000)
})

async function getData(){
  return p1
}
//getData().then(res=>console.log(res))

async function getData1(){
  console.log('hi')
  try{
    let res1 = await p1
    console.log(res1)
    console.log('hello')
    let res2 = await p2
    console.log(res2)
  }
  catch(e){
    console.log(" failed ",e)
  }
  
  console.log('hello at end')
}
getData1()
//getData1().catch((e)=>console.log("failed ",e.message))
