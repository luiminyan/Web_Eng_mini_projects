// Math
// 去除小数部分
console.log(Math.trunc(-42.7));
// 
console.log(Math.sign(20));
console.log(Math.pow(2,4));
console.log(Math.PI);


// Number
// 最小的数字
console.log(Number.MAX_VALUE);
// 最大的数字
console.log(Number.MIN_VALUE);
var str01 = 'Hello world!';
// is not a number
console.log(isNaN(str01));
console.log(typeof(str01));

// Array
const numbers = [8, 2, 7, 4, 15];
console.log(typeof(numbers[0]));

console.log(numbers.sort());

console.log(numbers);

console.log(numbers.slice(1, 4));

console.log(numbers.find(x => x > 10));

console.log(numbers.findIndex(x => x > 10));

// String
console.log(" A B C ".trim());
console.log("abcdefg".toUpperCase());
console.log("abcdef".indexOf("c"));
console.log("abcdef".charAt(1));
console.log("Hello".includes("ello"));