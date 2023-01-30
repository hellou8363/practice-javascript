let num = undefined;
let obj = null;

console.log(typeof 100);
console.log(typeof 10.5);
console.log(typeof "홍길동");
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: '홍길동', age: 25 });
console.log(typeof num);
console.log(typeof obj);

// ---------------------------------------------------

stdName = "홍길동";
comGrade = 96;

// 변수명 재선언
stdName;
comGrade;

console.log(`stdName: ${stdName}`);
console.log(`comGrade: ${comGrade}`);

// ---------------------------------------------------

function getGrade() { // 함수 선언
  var kor = 95; // 지역변수
  console.log(`getGrade() => kor: ${kor}`)
} // getGrade

var kor = 100; // 전역변수

getGrade(); // 함수호출

console.log(`kor: ${kor}`);

// ----------------------------------------------------
// Rest Parameter: Java => 가변인자 매개변수
// ...
function getNumbers(...numbers) { 
  return numbers.reduce((p, c) => p + c);
} // getNumbers

const numbers = [1, 2, 3, 4, 5];
console.log(getNumbers(...numbers));

const [num1, num2] = numbers;
console.log(num1, num2);

// ----------------------------------------------------

function temp(strings, str1, str2) {
  return strings[0] + str1 + strings[1] + str2;
} // temp

const home = '집';
const now = '지금';

const say = temp`나는 ${home}에 가고 싶다. ${now}`;
console.log(say);