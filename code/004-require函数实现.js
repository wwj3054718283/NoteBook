
// ------------------1.定义myRequire函数---------------------
// 自己实现 require 函数 =======================
function myRequire(filePath){
    //导入 内置模块
    const path = require('path') // 路径处理
    const fs = require('fs') // 硬盘读写
   // 0.声明 变量 ------------------------------
   let module = {
     exports:{}
   }
   let exports = module.exports 
 
   // 1.读取 传入的 文件内容 ---------------------
   // 1.1 拼接文件物理路径
   filePath = path.join(__dirname,filePath)
   // 1.2 读取文件内容
   const content = fs.readFileSync(filePath,'utf8')
 
   // 2.运行 读取出来的 JS 代码 -----------------
   eval(content) // 注意，eval执行的代码 享用 当前函数的作用域
 
   // 3.返回 module.exports
   return module.exports
 }
 module.exports.myRequire = myRequire
 
 // ------------------2.my.js--------------------------------
 module.exports = {
     name:'ruiky',
     age:22,
     sayHi(){ console.log(this.name) }
 }
 
 // ------------------3.测试调用--------------------------------
 const my = myRequire('./004-require函数实现.js')
 console.log(my)