// Find largest element in an array
const array = [0, 1, 2, 3, 4, 5, 6];
let largest = 0;
for (let i = 0; i < array.length; ++i)
    largest = array[i] > largest ? array[i] : largest;

console.log(largest);
