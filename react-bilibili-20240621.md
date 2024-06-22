# react 面试题
 create time：20240621
 地址：https://www.bilibili.com/video/BV1Rc411e7D2/?p=3&spm_id_from=pageDriver&vd_source=76726883053235fcf232f2186b9fb68c

 ## 1. React 事件和普通 HTML 事件有什么不同

### react 合成事件

- 事件名称：HTML 采用全小写的方式；react 采用小驼峰的方式
- 事件函数处理：HTML 采用字符串；react 采用 onClick 的方式
- 阻止默认行为：event.stopPropagation() 阻止默认事件

合成事件：模拟原生 DOM 的行为，主要是为了实现跨平台，兼容不同的平台

## 2. 受控组件和非受控组件

可以通过 react 提供的 api 实现控制数据状态变化的组件，反之
- 比如 input，可以通过添加 value 和 onInput（或 onChange） 的方式，由非受控组件转化为受控组件，将原生操作交给 react 执行

## 3. useState 为什么是数组而不是对象

因为返回数组可以方便我们匿名处理，方便解构处理，根据输出顺序进行解构
而如果返回是对象，则解构出来的名称与原名称需要保持一致，根据 key 的值进行解构，如果需要使用多个解构，还需要重命名变量

## 4. refs

可以让开发者直接访问 DOM 
例如获取 input 的焦点进行处理

## 5. 为什么使用 hooks

- 当组件复杂时，需要高内聚，低耦合，提高代码的维护性

## 6. 错误边界

比如当一个组件出错了，js 会停止运行，导致整个系统崩溃，为了局部错误不至于导致系统崩溃，我们需要定义错误边界
可以捕获子组件的 js 报错，对子组件进行降级处理

## 7. 代码分割

- import 引入，（点）.then 的方式
- React.lazy 动态渲染组件，懒加载需要使用 <Suspense></Suspense>

## 8. Fragments

一般组件需要返回一个根节点，借助 <React.Fragment> </React.Fragment>,简写<> </>
如果组件中需要进行遍历，key 可以放到 <React.Fragment key ={item.id}> </React.Fragment> 中

## 9. 高阶组件 HOC 

HOC 是一个纯函数，没有副作用
输入是组件，返回的值也是组件
- 什么时候需要使用高阶组件？
1. 需要抽离公共功能模块，公共的样式，例如 <Layout></Layout> 组件，可以设置 pading margin 等，提升复用性
2. 渲染流程控制，权限控制，比如实现一个表单，需要一定的权限控制
3. 检测渲染性能的好坏程度


### 9.1 属性代理

- props 
- state
- 控制渲染逻辑

## 10. hooks

ahooks 的使用

1. useState  组件内部的变量，想改变一个值时，会触发组件的更新，重新 render
2. useRef    不会触发组件的更新，可以进行手动修改
3. useEffect 在某些时间点触发一些方法，如果第二个参数的数组为空，相当于初始化的时候执行一次，返回的结果用于清除副作用，useEffect 不能直接用 async【组件更新挂载完成之后 => DOM 更新 => useEffect】会有闪动
4. useLayoutEffect      【组件更新挂载完成之后 => useLayoutEffect=> DOM 更新 => useEffect】会有卡顿现象
5. useContext       传递上下文，结合 redux 外层提供，里面包裹的组件消费
6. useReducer       state,action,dispatch 结合 redux,context,provider,comsumer 一同来实现数据共享
7. useMemo      返回函数运行的结果 || 若父组件更新了，子组件也会重新渲染，但其实子组件并没有更新，所以这种更新是没有必要的，useMemo 可以实现计算复杂数据缓存的作用
8. useCallback  返回的是cb的函数

