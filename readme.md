### wxs 类似于vue的过滤器
但是书写的时候，不能使用ES6语句
在wxml中使用使用 
```html
<wxs src="./../../utils/filter.wxs" module="unit" ></wxs>
```
引入并且取别名
### 关于slot与vue的区别
小程序的slot需要使用 
```js
options: {
    multipleSlots: true//开启插槽
  }
```
### 关于外部样式写发
在组件内部使用
```js
externalClasses: ['tag-class']
```
### 关于bind 与catch区别
catch会阻断事件冒泡
### 编译转义字符 eg:&nbsp
需要使用decode="{{true}}"，开启编译自带的。类型vue的v-html 与react的dangerouslySetInnerHTML 。但只是相近
### 子组件派发事件
```js
this.triggerEvent("behavior", {xxx:xx})
```
### Behavior 解释
Behavior就是类型vue的mixins
### bindconfirm 事件
手机端输入框确认事件 ，模拟器的回车事件
14.5