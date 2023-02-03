const pringMsg = userName => `hello, ${userName}!`;

// console.log(pringMsg('yoyo'));

// -----

function add(x, y) { // 기본 함수선언
  return x + y;
} // add

var calSum = add; // 함수를 변수1에 할당
var addUp = add; // 함수를 변수2에 할당

console.log(`결과 값: ${calSum(5, 10)}`); // 변수1로 호출
console.log(`결과 값: ${addUp(5, 10)}`); // 변수2로 호출
console.log(`결과 값: ${add(100, 200)}`); // 원래의 함수명으로 호출


// -----

function plus(num1, num2) {
  console.debug(`1. puls ${num1} + ${num2} = ${num1 + num2}`);
} // plus

function plus(num1, num2, num3 = 0) { // num3의 기본값 = 0
  console.debug(`1. puls ${num1} + ${num2} + ${num3} = ${num1 + num2 + num3}`);
  console.debug(`arguments: ${arguments}`, arguments);
  console.debug(`arguments => `, arguments);
  // console.debug(`arguments.callee => ${arguments.callee}`);
} // plus

// 동일 이름의 함수의 경우, 가장 마지막에 선언된 동일 이름의 함수만 메모리에 생성된다.
plus(); // 인자값을 주지 않은 경우, All undefined
plus(1, 2); // 매개변수 개수보다 인자값이 적은 경우
plus(1, 2, 3);
plus(1, 2, 3, 4, 5); // 매개변수 개수보다 인자값이 많은 경우