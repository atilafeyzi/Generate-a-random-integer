// Generate a random integer

// const generatrRandom = (min, max) => {
//   if (min === undefined && max === undefined) {
//     return "Enter Min & Max";
//   }
//   const result = min + Math.floor(Math.random() * (max - min + 1));
//   return result;
// };

// console.log(generatrRandom(3, 10));
// console.log(generatrRandom());

// or

const generatrRandom = (min, max) => {
  if (!min && !max) {
    return "Enter Min & Max";
  }
  if (!max) {
    max = min;
    min = 0;
  }
  const result = min + Math.floor(Math.random() * (max - min + 1));
  return result;
};

console.log(generatrRandom(3, 10));
console.log(generatrRandom());
console.log(generatrRandom(50));
