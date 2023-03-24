const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
  ];


//   foreach solution
var count = {};

arr.forEach((value) => {
  count = { ...count, [value]: (count[value] || 0) + 1 };
});

console.log(count);

// reduce solution
// const count = arr.reduce((accumulator, value) => {
//     return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
//   }, {});
  
//   console.log(count);


