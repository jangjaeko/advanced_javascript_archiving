// Falsy index
let f1 = undefined; // false
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //bigint false

if (!f1) {
  //   console.log("f1 is falsy");
}

// Truthy index
// => 7가지의 Falsy를 제외한 모든 값

let t1 = "hello"; // true
let t2 = 42;
let t3 = -42;
let t4 = [];
let t5 = {};
let t6 = function () {};

// 활용 사례
function printName(person) {
  //   if (person === undefined || person === null) {
  if (!person) {
    console.log("이름이 없습니다.");
    //오류 방지됨
    return;
  }
  console.log(person.name);
}

let p1 = { name: "jang" };
// let p2
// printName(p2); // error => undifined
