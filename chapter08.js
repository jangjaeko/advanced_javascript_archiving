// 5가지 배열 변형 매서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
    {name : "jaeho", hobby : 'tennis'},
    {name : "jo", hobby : 'tennis'},
    {name : "eho", hobby : 'soccer'},
]

const tennisPeople = arr1.filter((item) =>{
    if(item.hobby === 'tennis') return true;
})


console.log(tennisPeople);

//2. map    
// 배열의 모든 요소를 돌면서, 콜백 함수의 반환값들로 새로운 배열을 생성
// array map to new array
let arr2 = [1,2,3,4,5];

const mapResult = arr2.map((item, idx, arr) => {
     return item * 2;
});

let names = arr1.mapp((item) => item.name);
console.log(names); // ['jaeho', 'jo', 'eho']

//3. sort
// 배열을 사전순으로 정렬하는 매서드
// array sort to ascending order

let arr3 = [10,3,5];
arr3.sort();  
console.log(arr3); // [10,3,5] (문자열로 비교하기 때문에 1과 3의 자릿수 비교)

arr3.sort((a,b) => a - b);
// arr.sort((a,b)=>{
//     if(a < b) return -1; //내림차순 
//     else if(a > b) return 1;// 오름차순
//     else return 0; // 같을때 유지하라
// })

console.log(arr3); // [3,5,10]


// 4. toSorted 
// new array sort to ascending order but do not change original array

let arr4 = ['banana', 'apple', 'orange'];
let sortedArr = arr4.toSorted();
console.log(arr4); // ['banana', 'apple', 'orange']
console.log(sortedArr); // ['apple', 'banana', 'orange']

// 5. join
// 배열의 모든 요소를 문자열로 결합하여 반환
// array join to string

let arr5 = ['Hello', 'world', 'JS'];
let result1 = arr5.join(); // 기본값 , 콤마로 구분
console.log(result1); // 'Hello,world,JS'

let result = arr5.join(' '); // ' ' 공백으로 구분
console.log(result); // 'Hello world JS'
