// 构造函数 的 函数名 一般以 大写开头
function Dog(name,age,gender){
    this.dname = name
    this.dage = gender
    this.gender = gender
    // 问题：每次new创建 对象 都会创建新的 方法内存空间，消耗内存
    // 解决问题：原型方法，将所有new创建的 对象 方法指向同一内存
    this.bark = function(){
        console.log(this.name,':汪汪汪·~~');
    }
}
// 解决：将方法放到原型对象中，在new对象调用时 构造函数没有的 去原型链中寻找
Dog.prototype.run = function(){
    console.log("狗子，快跑~~!",this.dname,"来了！");
}
// a.创建一个 空对象 {}
// b.将 空对象 对峙 赋值 给 构造函数里的 this
// c.执行构造函数 -> {dname:'ruiky',dage:2,dgender:false}
// d.返回 对象 地址
let dog = new Dog('ruiky',2,false)
console.log(dog);
// new对象的原型属性 指向 构造函数的 原型对象
// dog.__proto__ -> Dog.prototype
dog.run()