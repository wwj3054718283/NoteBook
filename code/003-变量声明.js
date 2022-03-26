// 1. var声明变量，变量重名不报错
console.log("a提升-->",a);
var a = 'a'
var a = "A"
console.log("a:-->",a);

// 2. let声明变量，变量重名报错 
// 重名---报错信息：Identifier 'b' has already been declared
// 3. let声明变量没有变量提升，提前使用会报错
//  提升---报错信息：Cannot access 'b' before initialization
// console.log(b);
let b = 'b'
// let b = "B"
console.log("b:-->",b);

// 4. const声明常量 不可改变
// 值变--错误信息：Assignment to constant variable.
const c = 'c'
// c = 'C'
console.log("c:-->",c);