# node

# 一、运行

`node app.js`

# 二、退出

## 1、从控制台关闭

ctrl+c

## 2、编程方式退出

`process.exit()`
当 Node.js 运行此行时，进程立即被强制终止。
这意味着任何待处理的回调、任何仍在发送的网络请求、任何文件系统访问、或者正在写入 `stdout` 或 `stderr` 的进程，所有这些都将立即被非正常地终止。
默认的退出码为 `0`，表示成功。不同得退出代码有不同得含义，关于退出码含义（http://nodejs.cn/api/process.html#process_exit_codes）
**我们可以设置程序结束后得退出码**:`process.exitCode = 1`
在使用`process.exit()`突然结束进程，这种方式并不好。
**优化方式：**向命令发送SIGTERM信号，并使用进程信号句柄处理它：(process不需要引入，它自动可用)

```js
const express = require('express')
const app = express()
app.get('/', (req, res) => {  res.send('Hi!')})
const server = app.listen(3000, () => console.log('Server ready'))
process.on('SIGTERM', () => {  server.close(() => {    console.log('Process terminated')  })})
```

当然也可以从程序内部另一个函数发送这个信号：
`process.kill(process.pid, 'SIGTERM')`

## 三、环境变量读取

`process.env.NODE_ENV // "development"`
Node.js 的 `process` 核心模块提供了 `env` 属性，该属性承载了在启动进程时设置的所有环境变量。NODE_ENV 环境变量的示例，该环境变量默认情况下被设置为 `development`。