const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
const promise4 = new Promise((resolve, reject) => {
  const err = new Error("error");
  reject(err);
});
// reject case
// Promise.all([promise1, promise2, promise4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((e) => {
//     console.log("error", e.message);
//   });
// //fullfill case
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// reject case
Promise.any([promise4])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => {
    console.log("error", e.message);
  });
//fullfill case
Promise.any([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//reject case
// Promise.allSettled([promise1, promise2, promise4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((e) => {
//     console.log("error", e.message);
//   });
// //fullfill case
// Promise.allSettled([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

//reject case
// Promise.race([promise1, promise4])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((e) => {
//     console.log("error", e.message);
//   });
// //fullfill case
// Promise.race([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
