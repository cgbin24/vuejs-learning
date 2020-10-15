// 项目的 js 文件入口
// 引入 jQuery 库
// import $ from 'jquery'
import $ from 'jquery'


$(function(){
    $('li:odd').css('backgroundColor','black')
    $('li:even').css('backgroundColor', function(){
        return '#'+'CB7721'
    })
})


// 使用 webpack-dev-server 实现项目的自动打包构建
// 命令：npm i webpack-dev-server -D 安装到本地开发依赖
// 用法完全和 webpack 一样
// 本地安装的 依赖 无法当作脚本命令执行，需要更改为 全局


class Person{
    // static第一一个静态属性
    // 可以直接使用类名引用
    // 实例属性：只能通过类的实例来访问的属性
    static info = {name: 'rs',age: 20}
}

// var p1 = new Person()   // 实例化一个对象










