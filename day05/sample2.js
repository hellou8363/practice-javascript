// map
var s = [0, 1, 2, 3, 4, 5];
var s1 = s.map(value => value + 1);

console.log(s);
console.log(s1);

// filter
var data = [21, 42, 44, 14, 25];
var data1 = data.filter(value => value % 2 == 0);
console.log(data);
console.log(data1);

var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = num.filter(value => value >= 2 && value <= 5);
console.log(result);

// indexOf & lastIndexOf
var num2 = [2, 5, 10, 5, 2];
console.log(num2.indexOf(2));
console.log(num2.lastIndexOf(2));
