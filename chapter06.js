// 6가지의 요소 조작 매서드

// 1. push() : 배열의 마지막에 요소 추가
// 맨 뒤에 요소 추가

let arr = [1, 2, 3];
arr.push(4);
const newlength = arr.push(5, 6);
// console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(newlength); // 6

// 2. pop() : 배열의 마지막 요소 제거
// 맨 뒤에 요소 제거

let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
// console.log(arr2); // [ 1, 2 ]
// console.log(popedItem); // 3 (제거된 요소 반환)

// 3. shift() : 배열의 첫번째 요소 제거
// 맨 앞에 요소 제거

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(arr3); // [ 2, 3 ]
// console.log(shiftedItem); // 1 (제거된 요소 반환)

// 4. unshift() : 배열의 첫번째 요소 추가
// 맨 앞에 요소 추가

let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
arr4.unshift(-2, -1);
// console.log(arr4); // [ -2, -1, 0, 1, 2, 3 ]
// console.log(newLength2); // 4 (새로운 배열의 길이 반환)

// 5. splice() : 배열의 특정 인덱스에 요소 추가, 제거
// splice(시작 인덱스, 제거할 요소 개수, 추가할 요소1, 추가할 요소2, ...)
// 시작 인덱스 : 마지막 인덱스 + 1

let arr5 = [1, 2, 3, 4, 5];
const sliced = arr5.slice(2, 5); // [3,4,5]
const sicled2 = arr5.slice(2); // [3,4,5]
const sliced3 = arr5.slice(-2); // [4,5]
// console.log(arr5); // [1, 2, 3, 4, 5]

// 6. concat() : 배열 합치기
// 두개의 서로다른 배열을 이어붙여서 새로운 배열을 변환

let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];

const newArr = arr6.concat(arr7);
// console.log(newArr); // [1, 2, 3, 4, 5, 6]
// console.log(arr6); // [1, 2, 3] (원본 배열은 변경되지 않음)
