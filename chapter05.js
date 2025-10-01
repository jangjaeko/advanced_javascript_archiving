// 1. 배열 순회 iteration

let arr = [1, 2, 3];

// 1.1 배열 인덱스 이용 (arr.length )
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]); // 1 2 3
}

let arr2 = [4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]); // 4,5,6,6,7,8,
}

//1.2 for ... of 문
// 오직 배열을 순회하기 위해서 쓰는 문법
// 인덱스를 저장하지 않고 순회만 진행함
for (let item of arr2) {
  //   console.log(item); // 4,5,6,6,7,8,
}

// 2. 객체 순회

let person = {
  name: "jang",
  age: 20,
  hobby: "football",
};

//2.1 Object.keys() : 객체의 키를 배열로 반환

let keys = Object.keys(person); // ['name', 'age', 'hobby']

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = person[key];
  //   console.log(key, value);
}

for (let key of keys) {
  let value = person[key];
  //   console.log(key, value);
}

// 2.2 Object.values() : 객체의 값을 배열로 반환

let values = Object.values(person); // ['jang', 20, 'football']

for (let value of values) {
  //   console.log(value);
}

// 2.3 for ... in 문 : 객체의 키를 순회
// 객체를 순회하기 위해서 사용하는 문법

for (let key in person) {
  const value = person[key];
  //   console.log(key, value);
}
