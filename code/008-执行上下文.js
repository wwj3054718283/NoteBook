// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f();
// }
// console.log(checkscope());
// 1.压入checkscope()执行上下文
// 2。由于返回的是f()，所以压入f()执行上下文
// 3.弹出f()上下文
// 4.弹出checkscope()执行上下文

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
console.log(checkscope()());
// 1.压入checkscope()执行上下文
// 2。由于返回的是f，checkscope()执行完毕，弹出checkscope()执行上下文
// 3.返回f,调用f(),所以压入f()执行上下文
// 4.弹出f()上下