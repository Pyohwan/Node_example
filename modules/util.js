var util = require('util');

// 문자열 가공.
console.log(util.format('%s = %s', 'Item1'));
console.log(util.format('%s = %s', 'Item1', 'Item2', 'Item3'));
console.log(util.format(1, 2, 3));

// 객체 형식 확인.
console.log(util.isArray([1,2,3]));

// 자바스크립트 객체를 문자열로 변환.
var obj = {first:'Brad', last:'Dayley'};
// 오버라이딩.
obj.inspect = function(depth) {
	return '{name: "' + this.first + ' ' + this.last + '"}';
};

console.log(util.inspect(obj));