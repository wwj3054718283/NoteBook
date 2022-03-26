[toc]

# 一、arguments参数

arguments是浏览器传递给函数的隐式参数，除了arguments外还有this也是隐式参数。**this指代的是函数的上下文对象，arguments指代的是封装实参的对象。**

**arguments默认属性**

* callee属性：callee的值是一个指向本身的函数
* length属性：arguments的原型索引\__proto__的值是Object，所以arguments不是数组，而是一个类数组
* Symbol属性：该类型的值都是独一无二的，该键指向的是一个values函数，其值是一个生成**迭代器**的函数。

# 二、ctx

ctx是context的缩写，中文一般叫做上下文。可以理解为上(request)下(response)沟通的环境，所以koa中把把他们两个都封装进了ctx对象，koa官方文档里的解释是为了调用方便，ctx.req=ctx.request,ctx.res=ctx.response。

# 三、next

在定义express中间件函数的时候都会将第三个参数定义为next，这个next函数主要负责将控制权交给下一个中间件，如果当前中间件没有中介请求，并且next没有被调用，那么当前中间件的请求将被挂起，灯到next()后的中间件执行完成后再返回继续执行。

大致流程：执行第一个中间件，遇到next进入下一个中间件，一直执行到最后一个中间件，然后逆序执行上一个中间件next之后的代码，直到第一个中间件执行结束才发出响应。