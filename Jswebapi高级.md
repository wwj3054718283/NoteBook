# Js/webapi高级

## 1、let/var/const

* var是老式的语法，用来声明变量
  * 有变量提升
  * 变量可以重名，后面的覆盖前面的同名变量
  * 没有块级作用域
* let是 新的语法，用来声明变量
  * 没有变量提升
  * 不能重复声明同名变量
  * 有块级作用域

* const是 新的语法，用来声明**常量**
  * 没有变量提升
  * 不能重复声明同名变量
  * 有块级作用域
  * 不能改变值

## 2、jQuery的$

- jquery库 为了方便 程序员 使用它的功能，特意 将 导出的 jQuery构造函数 赋值给了 全局变量 `$`

  ````js
  // jquery.js--------------------------
  if (typeof noGlobal === "undefined") {
      window.jQuery = window.$ = jQuery;
  }
  ````

## 3、+号

* 功能：

  * 数字：加法运算
  * Boolean：加法运算
  * 字符串：拼接
  * 字符串和其他类型：将其他类型转换为字符串类型，进行拼接

* 代码：

  ````js
  //a. 数值字符串 + 数值
  alert('11' + 12); // '11' + '12'   ->  ’1112‘
  alert(2 + '15'); // '2' + '15'   -> '215'
  
  //b. 字符串 + 布尔值
  alert('male：' + true); // 'male：' + 'true' -> ’male：true‘
  alert('male：' + false); // ’male：false‘
  
  //c. 字符串 和 引用类型相加：
  // 字符串 + 对象.toString()
  'abc' + [1,2,3]; // 'abc' + [1,2,3].toString() ->  'abc[1,2,3]'
  'abc' + {a:12}; // 'abc' + {a:12}.toString() ->  'abc[Object object]'
  'abc' + function(){...}; // 'abc' + 函数.toString() ->  'abc函数代码'
  ````

## 4、自定义toString

```js
// 字符串 和 引用类型相加：
// 字符串 + 对象.toString()
function Dog(name, age) {
    this.name = name;
    this.age = age
}

Dog.prototype.bark = function () {
    console.log('汪汪汪~~！')
}
Dog.prototype.toString = function () {
    return this.name + this.age + '构造函数~'
}

let d1 = new Dog('ruiky', 4)

let res = '讨厌' + d1

console.log(res)
```

![image-20220326155913541](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326155913541.png)

## 5、JS预解析

* 变量提升 和 函数提升

![image-20220326161530009](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326161530009.png)

* 函数内部的局部变量提升

  ![image-20220326161558841](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326161558841.png)

## 6、构造函数

* 作用：就是一个对象工厂，批量创建 有 相同属性 和 共用相同方法的 对象

## 7、函数声明方式

* 声明式函数

  `````js
  functioin a(x,y){
      return x + y
  }
  `````

* 匿名函数

  ````js
  let a = function(){}
  let b = ()=>{ }
  ````

* 函数对象实例

  ````js
  let c = new Function('x','y','return x + y;')
  Function.prototype.name = 'John'
  c.name = 'Tom'
  ````

## 8、值类型和引用类型

* 数据类型分两大类：基本数据类型(值类型)+复杂数据类型(引用类型)

  * 基本数据类型(值类型)：Number/String/Boolean/Undefined/Null
  * 复杂数据类型(引用类型)：Object/Function/Array......

* 值类型传参

  ![image-20220326165900125](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326165900125.png)

* 引用类型传参

  ![image-20220326170059502](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326170059502.png)

## 9、Node.js和浏览器

* 共同点：都包含js引擎

* 相同点：各自 拥有自己的api接口

  ![image-20220326170312526](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326170312526.png)

  ![image-20220326170326585](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326170326585.png)

## 10、包管理工具

- 常见的： npm 和 yarn 和 cnpm
- 作用：管理项目的 node 模块包，下载安装，删除，更新包....

### 10.1 npm

- 全称：nodejs package manager (node包管理工具)
- 安装：
  - 方式一：随 nodejs 一起安装，默认和nodejs在同一个目录
  - 方式二：用 yarn / cnpm 来安装 npm ，安装在 不同的包管理工具的 全局模块目录中

* 运行：`npm i 包名`
  * 原理：
    - 去 安装目录中 找出 **npm.cmd** 脚本，内部 调用 **nodejs** 去执行 **npm-cli.js** 核心代码文件
    - `i 包名` 是作为 参数 传给 **npm-cli.js** 核心程序

  ![image-20220326222536203](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326222536203.png)

### 10.2 yarn

- 它是谷歌团队研发的包管理工具
- 特点：
  - 最先 使用 并行下载，Npm是后来学了它的

### 10.3 cnpm

- 其实 就是 npm，只不过 默认的下载镜像服务器 是 淘宝的镜像！

## 11、全局包的安装路径

### 11.1 npm全局路径

* 命令：npm config get prefix

  ![image-20220326222837363](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326222837363.png)

### 11.2 yarn全局路径

- 命令：

  - 查看模块包路径：`yarn global dir`
  - 查看脚本路径：`yarn global bin`

  ![image-20220326222910852](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220326222910852.png)

### 11.3 遇到找不到命令的错误

* 原因：没有全局适配
* 解决方案：
  - 将 `npm的全局安装路径` 和 `yarn的bin路径` 添加到 系统的**环境变量**的 path 中！
  - 重启 终端程序！才会读取最新的 环境变量！

## 12、nrm切换镜像

- 全称：npm registry manager(npm 镜像管理工具)

- 作用：帮助 设置 本机 npm 的 镜像服务器地址的工具

- 全局安装：`npm i -g nrm`

  ![image-20220327085513196](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327085513196.png)

- nrm常见命令：

  - 查看所有可用的知名镜像服务器：`nrm ls`

  ![image-20220327085543583](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327085543583.png)

  * 修改 本机 npm 的镜像服务器地址：`nrm set taobao`,达到 修改 npm 下载镜像路径的目的

- npm 全局安装

  - 命令：`npm i -g 包名`
  - 全局安装目录：`npm config ls` 打印的 prefix 就是 全局目录

  ![image-20220327085620396](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327085620396.png)

## 13、JS中的导入导出

![image-20220327090134104](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327090134104.png)

- 问题：用什么语法 实现 js 中 引入js文件呢？谁来引入呢？

- 解决方案：由浏览器来引入文件，按照什么语法规则 来识别呢？

  - 按照 业内 的 规范 来识别

- commonJS规范

  - 资料：[https://zhaoda.net/webpack-handbook/index.html](https://gitee.com/link?target=https%3A%2F%2Fzhaoda.net%2Fwebpack-handbook%2Findex.html)
  - 规定了 js导入js使用 `require`导入/ `module.exports` 导出

  ````js
  //1.js
  module.exports = {
     name:'ruiky'
  }
  //2.js
  let obj = require('./1.js')
  console.log(obj.name)
  ````

* ES6中import/export

  ````js
  //1.js
  export default {
      name:'ruiky'
  }
  //2.js
  import obj from './1.js' // 注意：import 声明的是常量
  console.log(obj.name)
  ````

* 在vue项目中配置 导入方式

  * 通过package.json中 设置**type**属性

  ![image-20220327090517307](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327090517307.png)

### 13.1 import 同步异步

* 同步导入

  ````js
  import a from './1.js'
  import './1.js'
  ````

  

* 异步导入：以函数方式调用，返回Promise

  ````js
  {
      name: 'layout',
      path: '/', // /#/
      component: () => import('@/views/layout/index.vue')
  }
  ````

	### 13.2 require函数实现

- require函数可以导入 各种类型的资源，一般用来导入 js居多

- 我们通过自己实现一个 来彻底理解 `module.exports` / `exports` 的关系

  ```js
  // ------------------1.定义myRequire函数---------------------
  // 自己实现 require 函数 =======================
  function myRequire(filePath){
     //导入 内置模块
     const path = require('path') // 路径处理
     const fs = require('fs') // 硬盘读写
    // 0.声明 变量 ------------------------------
    let module = {
      ....
      exports:{}
      ....
    }
    let exports = module.exports 
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
  const my = myRequire('./my.js')
  console.log(my)
  ```

## 14、数组API

### 14.1  新增方法

* push:从数组 尾部加入元素
* unshift:从数组 头部加入元素
* splice:在指定位置 加入元素

### 14.2  删除方法

* splice:从指定位置开始 删除指定个数的 元素
* pop:从 尾部 取出 元素
* shift:从 头部 取出 元素

### 14.3  筛选类

* arr.filter：筛选出符合条件的 新数组
* arr.some：判断数组中 是否 有 符合条件的 元素 只要有一个就返回true 否则返回false
* arr.every：判断数组中 是否 所有元素都符合条件。只要有一个不符合就返回false 否则返回true

### 14.4  查找类

* find：根据条件 查找第一个符合的元素
* findIndex：根据条件 找第一个符合条件的元素的索引
* indexOf：返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

### 14.5  操作类

* arr.sort：排序
* arr.forEach：遍历修改数组
* arr.map：遍历修改数组
* arr.reduce：箩筐方法 一般用来求 累加和 或 累乘积
* arr.join：将数组拼接成一个 字符串
* arr.slice：截取 子数组
* arr.reverse：翻转数组

### 14.6 相关方法

* str.split：将字符串按照 分隔符 拆分为一个 数组

### 14.7 数组方法例子

#### 1、sort

- 问题：数组 的 实现了sort方法内部高效排序算法，但是 涉及到 两个元素比较大小时，不知道怎么比
- 解决方案：程序员调用时，传入 比较大小的 方法，并约定：
- 方法返回 为 正数，说明 前面的元素 > 后面的元素
- 方法返回 为 负数，说明 前面的元素 < 后面的元素
- 方法返回 为 0 ，说明 前面的元素 == 后面的元素

```js
let arr3 = [
    { id: 4, name: '小白' },
    { id: 2, name: '白白白白白' },
    { id: 1, name: '大白白' },
    { id: 5, name: '洗' },
    { id: 3, name: '漂白' },
]

// --------------升序---------------
// 按照id排 正序(升序-有小到大)
arr3.sort(function (pre, next) {
    return pre.id - next.id
})
```

#### 2、splice

- 可以用来执行 删除、替换、插入 元素操作

```js
let arr = ['P城', 'G港', '医院', '学校', 'Z城']
//           0      1      2        3      4
// 1.【删除】 元素(下标，数量)
arr.splice(2, 1) // 从下标2开始删除1个
arr.splice(2, 2) // 从下标2开始删除2个
arr.splice(2) // 如果不传数量，则直接删到最后一个元素
console.log(arr)

// 2.【替换】元素（下标，数量，新元素）
arr.splice(2, 1, '机场',) // 用 '机场' 替换 '医院'
arr.splice(2, 1, '机场', 'Y城') // 用 '机场'和'Y城'  替换 '医院'

// 3.【插入】元素（下标，0，新元素）
arr.splice(2, 0, '讨厌死鬼') // 在 '医院'前面 插入一个新元素 '讨厌死鬼'
console.log(arr)
```

#### 3、filter

- 用来从原数组中 筛选 符合条件的元素 到新数组
- filter内部 会 遍历元素，并 将元素 逐个 传给 回调函数，根据返回值 决定是否 加入新数组返回
  - 回调函数返回值，如果是 true，则 将元素 加入 **新数组**
  - 回调函数返回值，如果是 false，则 忽略该元素
- 注意，filter函数 会返回 符合条件元素的 **【新数组】**，不影响 **原数组**

```js
// 1.案例1：筛选 符合条件的数字
let arr = [5, 4, 42, 7, 1, 9, 20, 41, 12]
let newArr = arr.filter(function (ele, ind) {
    return ele > 10 && ele < 40
})
console.log(newArr)

// 2.案例2：筛选 name长度>2的对象
let arr3 = [
    { id: 4, name: '小白' },
    { id: 2, name: '白白白白白' },
    { id: 1, name: '大白白' },
    { id: 6, name: '徐静蕾好好看哦' },
    { id: 5, name: '洗' },
    { id: 3, name: '漂白' },
]

// let arrNew = arr3.filter(function (ele) {
//     return ele.name.length > 2
// })
// 箭头函数的简化语法：
// 0.可以 省略 function 关键字
// 1.如果 形参只有一个，可以省略 小括号 ()
// 2.如果 代码块只有一行代码，可以省略 花括号 {}
// 3.如果 代码块只有一行代码，可以省略 return 关键字

let arrNew = arr3.filter(ele => ele.name.length > 2)

console.log(arrNew)
```

#### 4、find

- 根据 条件 查找 符合的 第一个元素,如果没找到，则返回 undefined

```js
// let test1 = '徐静蕾好好看哦'.includes('邹') // 返回 bool值
// let test2 = '徐静蕾好好看哦'.indexOf('邹') // 返回字符的下标，如果没找到，返回 -1
// console.log(test2)
let arr3 = [
     { id: 4, name: '小白' },
     { id: 2, name: '白白白白白' },
     { id: 1, name: '大白静白' },
     { id: 6, name: '徐静蕾好好看哦' },
     { id: 5, name: '洗衣服' },
     { id: 3, name: '漂白' },
 ]

let target1 = arr3.find(ele => ele.name.includes('静'))
console.log(target1)
```

#### 5、findIndex

- 根据 条件 查找 符合的 第一个元素 的下标,如果没找到，则返回 -1

```js
let arr3 = [
    { id: 4, name: '小白' },
    { id: 2, name: '白白白白白' },
    { id: 1, name: '大白静白' },
    { id: 6, name: '徐静蕾好好看哦' },
    { id: 5, name: '洗衣服' },
    { id: 3, name: '漂白' },
]

let target1 = arr3.findIndex(ele => ele.name.includes('静'))
console.log(target1)
```

### 14.8  includes

```js
// 对比 includes 方法
// 去判断 数组中 是否有 相同的 元素，返回 bool
let arr = [5, 4, 42, 7, 1, 9, 20, 41, 12]
let isOk1 = arr.includes(77) // 查找 简单类型数组（值类型数组）
//let isOk1 = arr.some(x => x === 7) // 查找 复杂数据类型数组（引用类型数组）
console.log(isOk1)
```

### 14.9 map修改元素

- 作用：修改元素，装入新数组返回
- 注意：
  - 如果数组中装的 **值类型数据**，则 **不会** 影响原数组
  - 如果数组中装的 **引用类型数据**，则 **会** 影响原数组

````js
// map 遍历 值类型数组
let arr7 = ['P城', 'G港', '医院', '学校', 'Z城']
let res3 = arr7.map(ele => ele += '_讨厌死鬼')
console.log(res3) 

// map 遍历 引用类型数组
let arr4 = [
    { id: 4, name: '小白' },
    { id: 2, name: '白白白白白' },
    { id: 1, name: '大白静白' },
    { id: 6, name: '徐静蕾好好看哦' }
]

let res2 = arr4.map(ele => {
    ele.id += 100
    ele.name += '__1008'
    return ele
})

console.log('map返回值：', res2) // undefined
````

- map修改 引用类型元素的 数组
  ![image-20220327094802055](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327094802055.png)

### 14.10 数组模拟堆栈和数列

![image-20220327095005086](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327095005086.png)

````js
let arr = [1,2,3]
arr[1]= 5 // [1,5,3]

let arr = []
arr.unshift(1) // [1]
arr.unshift(2) // [2,1]
arr.unshift(3) // [3,2,1]
let a1 = arr.shift() // [2,1]
let a2 = arr.shift() // [1]
let a3 = arr.shift() // []
````

- 栈结构（先进后出）
  - 从 尾部 加入，从 尾部 取出
  - 从 头部 加入，从 头部 取出
- 队列结构（先进先出）
  - 从 尾部 加入 ，从 头部 取出
  - 从 头部 加入 ，从 尾部 取出

## 15、this关键字

- this 是 函数内部的 **系统变量**，arguments 也是 函数内部的 **系统变量**

  - this 是在函数被 调用时
    - 默认 由 js引擎 为 **this** 传递值
    - 程序员也可以通过 代码 向 **this** 传递值

- this 在执行时是什么值呢？

  - `谁.出这个方法，方法里的this就是谁`

    - 对象.方法

    ![image-20220327111037236](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327111037236.png)
    - window.方法

    ![image-20220327111059158](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327111059158.png)

	## 16、this思考

```js
let o1 = {
    a: {
        b: {
            c: 123,
            test() {
                console.log(this)
            },
            test2: () => {
                console.log(this)
            }
        }
    }
}

o1.a.b.test() // b对象
o1.a.b.test2() // window对象
// 由于test2创建时 作用域为最外层js环境，没有其他函数包裹，所以这里的this指向window对象
```

## 17、call/apply/bind

- 如何修改 函数中的 this 呢？

  - call
  - apply
  - bind

  ![image-20220327111626897](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327111626897.png)

## 18、arguments

- 函数内部 除了 `this`，还有一个 `arguments` 对象，用来保存 **实参数据**

- 本质：保存了实参的 **伪数组**，有 **元素、下标、length**，但没有数组的方法

  ![image-20220327111835682](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327111835682.png)

## 19、深拷贝/浅拷贝

### 19.1 深拷贝：

- 递归完全 拷贝 整个对象 所有成员
- 通过JSON对象来实现深拷贝：JSON.parse(JSON.stringfy(obj))，注意不会拷贝方法
- lodash.deepClone( )... 递归拷贝，包含方法

### 19.2 浅拷贝：

- 拷贝对象地址：直接用=赋值
- 只拷贝对象的 第一层成员：for···in只循环第一层
- Object.assign方法

### 19.3 深拷贝深入

- 方式一：采用递归去拷贝所有层级属性

```js
function cloneDeep(obj){
  const newObj = {};
  let keys = Object.keys(obj);
  let key = null;
  let data = null;
  for(let i = 0; i<keys.length;i++){
    key = keys[i];
    data = obj[key];
    if(data && typeof data === 'object'){
      newObj[key] = cloneDeep(data)
    }else{
      newObj[key] = data;
    }
  }
  return newObj
}
```

- 方式二：解决了 对象属性的 循环引用问题(会导致死循环)
  - 判断一个对象的字段是否引用了这个对象或这个对象的任意父级，如果引用了父
  - 级，那么就直接返回同级的新对象，反之进行递归

```js
function deepCopy(obj, parent = null) {
    // 创建一个新对象
    let result = {};
    let keys = Object.keys(obj),
        key = null,
        temp = null,
        _parent = parent;
    // 该字段有父级则需要追溯该字段的父级
    while (_parent) {
        // 如果该字段引用了它的父级则为循环引用
        if (_parent.originalParent === obj) {
            // 循环引用直接返回同级的新对象
            return _parent.currentParent;
        }
        _parent = _parent.parent;
    }
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        temp = obj[key];
        // 如果字段的值也是一个对象
        if (temp && typeof temp === 'object') {
            // 递归执行深拷贝 将同级的待拷贝对象与新对象传递给 parent 方便追溯循环引用
            result[key] = DeepCopy(temp, {
                originalParent: obj,
                currentParent: result,
                parent: parent
            });

        } else {
            result[key] = temp;
        }
    }
    return result;
}
```

## 20、DOMContentLoaded

- DOMContentLoaded ，在 页面整个dom树生成后，立即执行 类似`jquery的入口函数`
- window.onload ，在页面dom树生成，页面资源加载完毕后，立即执行

## 21、自执行函数

- 为什么要用自执行函数？---> **防止变量污染**

- 语法：

  ```js
  (function add(a,b){
      log(a+b)
  })(1,2)
  
  // add(2,3) // 报错！
  ```

![image-20220327112753368](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327112753368.png)

- 自执行函数中的this
  - 凡是没有指定this的，就是window

```js
// 自执行函数里的 this 就是 window
(function a() {
  let b = 123
  console.log(this) // window(浏览器) / global(node)
})()
```

## 22、闭包

- 本质：就是 不会立即销毁的 函数作用域对象

- 表现形式：函数内部返回使用局部变量的子函数/自执行函数/dom的事件绑定....

- 作用：延长函数作用域的生命周期，避免变量污染...

- 描述：当函数执行结束后，会自动销毁这次的作用域对象 但是，本案例中，由于 返回的 内部函数 中 使用了 变量a 所以，这个作用域对象还不能被销毁，这种情况 就叫做【闭包】

  ![image-20220327113722688](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327113722688.png)

  ![image-20220327113802672](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20220327113802672.png)

## 23、作用域链



