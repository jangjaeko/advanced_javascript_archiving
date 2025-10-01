// Spread Operator
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// let arr3 = [arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]];
let arr3 = [...arr1, ...arr2]; // Spread Operator
// console.log(arr3); // [1, 2, 3, 4, 5, 6]

let obj1 = { key1: "value1", key2: "value2" };
let obj2 = { key3: "value3", key4: "value4" };

// let obj3 = {
//   key1: obj1.key1,
//   key2: obj1.key2,
//   key3: obj2.key3,
//   key4: obj2.key4,
// };
let obj3 = { ...obj1, ...obj2 }; // Spread Operator
// console.log(obj3);
// { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

function func(x, y, z) {
  //   console.log(x, y, z);
}
func(...arr1); // 1 2 3

// Rest Parameter
// 나머지 매개변수
// 여러개의 매개변수를 배열로 전달받음

function funcB(one, ...args) {
  // Rest Parameter // rest parameter는 반드시 마지막에 위치해야 함
  console.log(one); // 1
  console.log(args); // [ 2, 3 ]
}
funcB(...arr1);
