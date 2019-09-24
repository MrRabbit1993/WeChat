### wxs 类似于vue的过滤器
但是书写的时候，不能使用ES6语句
在wxml中使用使用<wxs src="./../../utils/filter.wxs" module="unit"></wxs>引入并且取别名
### 关于slot与vue的区别
小程序的slot需要使用 options: {
    multipleSlots: true//开启插槽
  },
### 关于不外部样式写发
在组件内部使用externalClasses: ['tag-class'],
### 关于