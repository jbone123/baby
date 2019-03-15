import React, { Component } from 'react' //rmrc
import ReactDOM from 'react-dom'  //rmrd
// import React from 'react' //imr

//函数就是一个合法的组件  props属性对象
function Welcome(props){
    console.log(props)
    return (
        <h1>
            hello {props.name} {props.age}
        </h1>
    )
}
function returnWelcome(){
    return <Welcome name='jbone' age='8'/>
}
const   element = returnWelcome();

function App(){
    return (
        <div>
            <Welcome name='jbone1' />
            <Welcome name='jbone2' />
            <Welcome name='jbone3' />
            <Welcome name='jbone4' />
        </div>
    )
}
/**
 * 组件的运行方式：
 * 1.render发现一个用户自定义组件，如果标签名以大写字母开头就是用户自定义组件
 * 如果小写字母开头就是dom组件
 * 2.先把jsx属性封装成一个props对象，{name:'jbone',age:'8'}
 * 3.把它作为参数传递给Welcome函数，获得一个返回值是一个react元素
 * 4.再把这个react元素渲染到页面上
 */

ReactDOM.render(<App/>,document.getElementById('root'))

