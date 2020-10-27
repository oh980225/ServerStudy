const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const newArr = [...arr1, ...arr2]; // ...배열 -> 배열내 원소 쭈욱~

// console.log(newArr);

const {length} = arr1; // 이렇게 하면 length가 arr1의 길이가 된다!
console.log(length);
