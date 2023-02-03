// for rnrneks dPwp
var x, y;

for (x = 2; x <= 5; x++) {
  console.log(`---[${x}단]---`);

  for (y = 1; y <= 9; y++) {
    console.log(`${x} * ${y} = ${x * y}`);
  } // inner-for
} // outer-for

// 배열
const arr = [1, 2, 3, 4];

// for-of문
for (let num of arr) {
  console.log(num);
} // for

// for-in문(배열의 index를 줌)
for (let index in arr) {
  console.log(index);
}

// for-each문
arr.forEach((x) => console.log(`x => ${x}`));
arr.forEach(function traverse(elem) {
  console.debug(`traverse(${elem}) invoked.`);
});
console.log("----------------------------");
arr.forEach(console.log);
/* 위 console.log 출력 값 : 
1 0 [ 1, 2, 3, 4 ] => 배열의 원소의 값, 인덱스 번호, 배
2 1 [ 1, 2, 3, 4 ]
3 2 [ 1, 2, 3, 4 ]
4 3 [ 1, 2, 3, 4 ]
*/

// -----

const arr2 = [
  1,
  "str",
  true,
  function add(num1, num2) {
    return num1 + num2;
  }, // add
];

console.log(arr2);

// ------

console.clear();

// -------

var x = 1;
var sum = 0;

while (x <= 100) {
  sum += x;

  x++;
} // while

console.log(`1 ~ 100까지의 합: ${sum}, x: ${x}`);

// --------

var i, j;

outloop: for (i = 0; i < 3; i++) {
  inloop: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 0) {
      break outloop;
    } // if

    console.log(`i = ${i}, j = ${j}`);
  } // inner-for
} // outer-for
console.log("done.");
