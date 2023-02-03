// 배열 객체를 생성하는 두 가지 방식
// (1) 배열 리터럴, (2) 배열객체 생성
// JS에서 배열의 제약은 없다.
// (1) 원소를 섞어서 저장 가능
// (2) 배열의 크기는 유동적

var city = ["Seoul", "Busan", "Incheon"]; // (1) 배열 리터럴
var city2 = new Array(); // (2) 배열 객체 생성
city2[0] = "CHEOAN";
city2[1] = "SUWON";

function printArr() {
  console.clear();
  console.group("printArr"); // 보통 함수의 이름으로 그룹 이름을 갖는다.

  console.debug(`printArr() invoked.`); // 함수 호출 로그
  console.log(`\t + arr.length: ${city.length}`); // 배열의 크기 로그

  let i = 0; // 블록 변수로 counter 변수 정의

  // 배열 순회 및 원소로깅
  // for ( ; i < city.length; i++) {
  //   console.log(`[${i}] = ${city[i]}, 타입: ${typeof city[i]}`);
  // } // for

  // for (str of city) {
  //   console.log(`[${i}] = ${city[i]}, 타입: ${typeof city[i]}`);
  // } // for-of

  city.forEach((value, index) =>
    console.log(`[${index}] = ${value}, 타입: ${typeof value}`)
  );

  console.groupEnd();
} // printArr

// printArr();

// -------------------------------------------------------------------

var city = []; // 배열 리터럴 방식으로 빈 배열(empty array) 객체 생성

// 빈 배열에 새로운 원소를, 인덱싱 기법으로 얼마든지 추가 가능
city[0] = "Seoul";
city[1] = "Busan";
city[2] = "Incheon";
city[3] = "Mokpo";
city[4] = "Sejeong";
// city[5] = undefined;
city[6] = "true";

// console.log(city);

// ----------------------------------------------------------------------

x = 5;

const arr = [100, "Seoul", true, x]; // 다양한 데이터 타입 저장

console.log('arr: ', arr);

x = 10;

console.log('arr: ', arr);

