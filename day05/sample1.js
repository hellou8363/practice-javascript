var arr1 = [1, 2, 3]; // 배열 리터럴 방식
console.log(arr1);

var arr2 = new Array(1, 2, 3);
console.log(arr2);

// 배열 객체 생성 확인 방법
console.log(typeof arr1);
console.log(Array.isArray(arr1));
console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);

console.log(arr1.constructor.prototype);

// join => 원본 배열 수정 X
var city = ["서울", "부산", "대전"];
console.log(city.join()); // 기본 구분자 => ,
console.log(city.join("-"));

// concat => 원본 배열 수정 X
var city01 = ["서울", "부산", "대전"];
var city02 = ["대구", "광주", "인천"];
var city03 = ["전주", "부여", "세종"];

var data1 = city01.concat(city02);
console.log(data1);
var data2 = city01.concat(city02, city03);
console.log(data2);

// reverse => 원본 배열 수정 O
console.log(city01.reverse());
console.log(city01);

// sort => 원본 배열 수정 O
console.log(city02.sort());
console.log(city02);

var numArr = [12, 19, 26, 31, 38, 4, 55];
console.log(numArr);
console.log(numArr.sort()); // 기본 정렬 => 사전 순

// 숫자 비교 정렬 - if문
var data4 = numArr.sort((a, b) => {
  if (a < b) return -1;
  if (a == b) return 0;
  if (a > b) return 1;
});
console.log(data4);


// 숫자 비교 정렬 - 삼항 연산자
var data5 = numArr.sort((a, b) => a < b ? -1 : a == b ? 0 : 1);
console.log(data5);

// 숫자 비교 정렬 - 오름차순
var data6 = numArr.sort((a, b) => a - b);
console.log(data6);

// 숫자 비교 정렬 - 내림차순
var data7 = numArr.sort((a, b) => b - a);
console.log(data7);

// 문자 정렬
var strArr = ["A", "B", "Z", "D", "C"];
console.log(strArr);
console.log(strArr.sort());

// slice
console.log(strArr.slice());
console.log(strArr.slice(0, 3)); // strArr[0] ~ strArr[2]
console.log(strArr.slice(2)); // strArr 배열의 2번째(strArr[1])부터 마지막 요소까지 
console.log(strArr.slice(-2)); // strArr 배열의 끝에서 2개의 요소

// delete
console.log(delete arr1[1]); // 요소를 삭제하지만 배열 공간은 남아있음(type: undefined)
console.log(arr1);

// splice
console.log(strArr.splice(1, 2)); // strArr[1]부터 2개의 요소 제거
console.log(strArr);

console.log(numArr);
// strArr[1]부터 2개의 요소 제거 후 그 자리에 10, 20을 넣음
console.log(numArr.splice(1, 2, 10, 20));
console.log(numArr);

// stack(push & pop)
console.log(numArr.push(1, 2));
console.log(numArr);
console.log(numArr.pop());
console.log(numArr);
console.log(numArr.pop());
console.log(numArr);

// 비어있는 배열은 pop하면 undefined가 된다.
var temp = [];
console.log('temp: '+ temp.pop());

// shift & unshift
var s = [];
var lang = s.unshift(10); // 배열 길이 반환
console.log('lang: ' + lang);
var lang2 = s.unshift(30);
console.log('lang2: ' + lang2);

console.log('s.shift: ' + s.shift()); // 삭제한 값 반환(30)
console.log(s);
console.log('s.shift: ' + s.shift()); // 10
console.log(s.shift()); // undefined
