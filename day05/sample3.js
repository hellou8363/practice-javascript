// 연관 배열 생성
var arr = {'k1' : 1, 'k2' : true, 'k3' : 'str'};
console.log(arr);

// key로 value조회
console.log(arr.k1);
console.log(arr.k2);
console.log(arr.k3);

console.log(arr['k1']);
console.log(arr['k2']);
console.log(arr['k3']);

console.log(typeof arr);
console.log(arr.constructor.prototype);

var result = JSON.parse(arr.k1);
console.log(result);

var obj = JSON.stringify(arr);
console.log(obj);

// 2차원 배열
var arr2D = [[1, 2], [3]];
console.log(arr2D[0]);
console.log(arr2D[0][1]);

// 1차원 배열로 2차원 배열 생성
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var arr3 = [9, 10, 11, 12];
var arr4 = [13, 14, 15, 16];

var allArr = [arr1, arr2, arr3, arr4];
console.log(allArr);

allArr.forEach(value => value.forEach(value => console.log(value)));
allArr.forEach(value => console.log(value));

allArr.filter((value, index) => index % 2 != 0).forEach(value => console.log(value.join(' ')));
