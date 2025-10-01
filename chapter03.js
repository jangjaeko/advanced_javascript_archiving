// 1. 배열 구조 분해 할당 (Destructuring Assignment)

let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
let [one, two, three, four = 4] = arr; // 배열 구조 분해 할당
//  console.log(one, two, three, four); // 1 2 3 4

// 2. 객체 구조 분해 할당 (Destructuring Assignment)

let person = {
  name: "jang",
  age: 20,
  hobby: "football",
};

let { name, age: myAge, hobby, address, extra = "hello" } = person; // 객체 구조 분해 할당
// console.log(name, myAge, hobby, address, extra); // jang 20 football undefined hello

// 3. 객체 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};
func(person); // jang 20 football undefined
// func(10); // TypeError: Cannot destructure property 'name' of '10' as it is not an object.
