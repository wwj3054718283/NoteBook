[top]

# v-for

v-for表示列表，直接在标签中使用

<li v-for='item in lists'>{{item}}</li>

# v-on（语法糖：@）

v-on：绑定事件监听器

< button @click="add">+</button>

# mustache

mustache：数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值

<span>Message: {{ msg }}</span>

# v-once

v-once指令，message不会再改变

<h2 v-once>{{message}}</h2>



# v-html

v-html解决服务器连带标签传值

<h2 v-html="url">{{url}}</h2>

url:'<a href="http://www.baidu.com">百度一下</a>'

# v-text

v-text和mustache语法相似，但不建议使用

<h2 v-text="message"></h2>

# v-pre

v-pre不会解析mustache语法

<h2 v-pre>{{message}}</h2>

# v-cloak

在vue解析之前，div中有一个属性v-cloak

在vue解析之后，div中没有一个属性v-cloak

D:\CODE\VUE\02插值\v-cloak.html

# v-bind（语法糖::）

v-bind:动态绑定属性

D:\CODE\VUE\03动态绑定\v-bind动态绑定class.html

# keep-alive

缓存当前组件状态，在下一次激活该组件时，回到缓存时的状态