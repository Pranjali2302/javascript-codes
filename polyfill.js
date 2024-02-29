let arr = [1, 2, 3, 4, 5];

//to demostarte broswer doenst have forEach & map
Array.prototype.forEach = null;
Array.prototype.map = null;

if (!Array.prototype.forEach) {
  //polyfill for foreach
  Array.prototype.forEach = function (callbackFun) {
    let length = this.length;
    for (let i = 0; i < length; i++) {
      callbackFun(this[i]);
    }
  };
}

arr.forEach((v) => {
  console.log(v * 4);
});

/* polyfill for map */
if (!Array.prototype.map) {
  Array.prototype.map = function (callbackFun) {
    let length = this.length;
    let result = [];
    for (let i = 0; i < length; i++) {
      result.push(callbackFun(this[i]));
    }
    return result;
  };
}

let result = arr.map((v) => v * 2);
console.log(result);

/* Polyfill for includes */

//let arr =[1,2,3,4,5]
const fruits = ["Banana", "Orange", "Apple", "Mango"];

//to demostarte broswer doenst have forEach & map
Array.prototype.includes = null;

if (!Array.prototype.includes) {
  //polyfill for foreach
  Array.prototype.includes = function (item, startindex) {
    let length = this.length;
    for (let i = startindex || 0; i < length; i++) {
      if (this[i] === item) return true;
    }
    return false;
  };
}

console.log(fruits.includes("Banana", 3));

/* polyfill for astring includes */
let text = "Hello World, welcome to the universe.";
//to demostarte broswer doenst have forEach & map
String.prototype.includes = null;

if (!String.prototype.includes) {
  //polyfill for includes
  String.prototype.includes = function (item) {
    if (this.indexOf(item) !== -1) {
      return true;
    }
    return false;
  };
}

console.log(text.includes("World"));
