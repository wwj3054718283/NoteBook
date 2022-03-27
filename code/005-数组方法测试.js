// let arr = ['P城', 'G港', '医院', '学校', 'Z城']
// //           0      1      2        3      4
// // 1.【删除】 元素(下标，数量)
// arr.splice(2, 1) // 从下标2开始删除1个
// arr.splice(2, 2) // 从下标2开始删除2个
// arr.splice(2) // 如果不传数量，则直接删到最后一个元素
// console.log(arr)

// // 2.【替换】元素（下标，数量，新元素）
// arr.splice(2, 1, '机场',) // 用 '机场' 替换 '医院'
// arr.splice(2, 1, '机场', 'Y城') // 用 '机场'和'Y城'  替换 '医院'

// // 3.【插入】元素（下标，0，新元素）
// arr.splice(2, 0, '讨厌死鬼') // 在 '医院'前面 插入一个新元素 '讨厌死鬼'
// console.log(arr)

console.log('---------------------------------------');

// 1.案例1：筛选 符合条件的数字
// let arr = [5, 4, 42, 7, 1, 9, 20, 41, 12]
// let newArr = arr.filter((ele)=> {
//     return ele > 10 && ele < 40
// })
// console.log(newArr)

// 2.案例2：筛选 name长度>2的对象
// let arr3 = [
//     { id: 4, name: '小白' },
//     { id: 2, name: '白白白白白' },
//     { id: 1, name: '大白白' },
//     { id: 6, name: '徐静蕾好好看哦' },
//     { id: 5, name: '洗' },
//     { id: 3, name: '漂白' },
// ]

// let arrNew = arr3.filter(function (ele) {
//     return ele.name.length > 2
// })
// 箭头函数的简化语法：
// 0.可以 省略 function 关键字
// 1.如果 形参只有一个，可以省略 小括号 ()
// 2.如果 代码块只有一行代码，可以省略 花括号 {}
// 3.如果 代码块只有一行代码，可以省略 return 关键字

// let arrNew = arr3.filter(ele => ele.name.length > 2)

// console.log(arrNew)

console.log('--------------------');

// // find
// let arr3 = [
//     { id: 4, name: '小白' },
//     { id: 2, name: '白白白白白' },
//     { id: 1, name: '大白静白' },
//     { id: 6, name: '徐静蕾好好看哦' },
//     { id: 5, name: '洗衣服' },
//     { id: 3, name: '漂白' },
// ]
// let target1 = arr3.find(ele =>
//     ele.name.includes('静')
// )
// console.log(target1)
// // findIndex
// let target2 = arr3.findIndex(ele => ele.name.includes('静'))
// console.log(target2)

// map 遍历 值类型数组
let arr7 = ['P城', 'G港', '医院', '学校', 'Z城']
let res3 = arr7.map(ele => ele += '_讨厌死鬼')
console.log(res3,arr7) 


// map
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
console.log('map原数组：', arr4) // undefined