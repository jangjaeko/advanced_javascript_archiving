// 단락 평가
// 단락 평가(short-circuit evaluation) : 논리 연산자에서 피연산자의 값을 모두 평가하지 않고 결과를 도출하는 것
function returnTrue() {
  console.log("returnTrue 호출됨");
  //   return true;
  return 1; // truthy
}

function returnFalse() {
  console.log("returnFalse 호출됨");
  //   return false;
  return 0; // falsy
}

// console.log(returnFalse() && returnTrue());
// returnFalse만 호출됨 => && 연산자는 앞의 피연산자가 false이면 뒤의 피연산자를 평가하지 않음

// console.log(returnTrue() && returnFalse());
// returnTrue, returnFalse 모두 호출됨 => && 연산자는 앞의 피연산자가 true이면 뒤의 피연산자를 평가함

// console.log(returnTrue() || returnFalse());
// returnTrue만 호출됨 => || 연산자는 앞의 피연산자가 true이면 뒤의 피연산자를 평가하지 않음

// 단락 평가 활용 사례

function printName(person) {
  //   //   if (person === undefined || person === null) {
  //   if (!person) {
  //     console.log("이름이 없습니다.");
  //     //오류 방지됨
  //     return;
  //   }
  //   console.log(person && person.name);
  const name = person && person.name;
  console.log(name || "이름 없음");
  // t || t 이면 앞에 t 반환
  // 단락평가를 통해 위의 if문을 대체 가능
}

printName(); // error => undifined
printName({ name: "jang" });
