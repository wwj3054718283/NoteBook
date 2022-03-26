# Axios

## 1、CORS

出于安全性，浏览器限制脚本内发起的跨源HTTP请求。 例如，`XMLHttpRequest` 和 [Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 遵循[同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)。这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非响应报文包含了正确 CORS 响应头。

## 2、代理服务器



## 3、跨域问题

### a、标签跨域

* 浏览器针对标签跨域不会做检查

* 浏览器会针对异步对象进行检查，但是不是在请求的时候检查，在**响应报文拿回来的时候会检查**。
  原因是：浏览器请求的时候，请求对象可以带允许跨域的参数

