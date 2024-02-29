// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

const arr = [1, 2, 2, 2, 5, 6, 6, 8];
const res = [];
let duplicates = [];
const length = arr.length;
const newArr = Array.from({ length: length }, (_, i) => i + 1);
/* to get duplicates */
let copy = [...arr];
for (var i = 0; i < length; i++) {
  let restArr = copy.slice(i + 1);
  if (restArr.includes(copy[i])) {
    duplicates.push(copy[i]);
    copy = copy.filter((v) => v != copy[i]);
  }
}
/* to get duplicates */

newArr.map((v) => {
  if (!arr.includes(v)) {
    res.push(v);
  }
});

console.log("duplicates :", duplicates);
// console.log("remaining :", res);
console.log("result :", [...duplicates, ...res]);
