
const data= [2,5,3,4]
const area = r => Math.PI * r * r
const circumference = r => 2 * Math.PI * r
const diameter = r => 2 * r

// const calculate =(data,logic)=>{
//   let output =[];
//   for(var i=0; i<data.length; i++){
//     output.push(logic(data[i]))
//   }
//   return output
// }
// console.log(calculate(data,area))
// console.log(calculate(data,circumference))
// console.log(calculate(data,diameter))

Array.prototype.calculate = function (logic){
  let output =[];
  for(var i=0; i<this.length; i++){
    output.push(logic(this[i]))
  }
  return output
}
console.log(data.calculate(area))
console.log(data.calculate(circumference))
console.log(data.calculate(diameter))
