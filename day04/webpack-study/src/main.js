// 这里是main.js 是js文件的入口

// 1、导入Jquery
// import *** from *** 是ES6中导入模块的方式
// ES6新语法 浏览器识别不了 会报错
import $ from 'jquery'
// const $ = require('jquery')
// 使用import语法 导入css 样式
import './css/index.css'
/* webpack 默认只能处理.js 文件，无法处理其他的非JS类型的文件
 如果要处理非JS类型的文件，需要手动的安装一些，合适的 第三方 loader 加载器
    1、如果想要打包处理 .css 文件，需要安装 cnpm i style-loader css-loader -D 
    2、打开 webpack.config.js 这个配置文件，在里面新增一个 配置节点，为module，他是一个对象，在这个module对象身上，有一个rules属性，这个rules属性是一个数组，这个数组中存放了所有第三方文件的 匹配 和 处理规则

 注意： webpack 处理第三方文件类型的过程
    1、发现这个要处理的文件不是JS文件，然后就去 配置文件中查找有没有对应的第三方 loader 规则
    2、如何能找到对应的规则，就会调用对应的 loader 处理，这种文件类型
    3、在调用 loader 时，是从后往前调用的
    4、当最后的一个 loader 调用完毕，会把处理的结果，直接交给 webpack 进行 打包合并，最终输出到 bundle.js 中去
*/
// 需要使用 npm i less-loader -D 导入依赖包
// 使用 cnpm i less -D
import './css/index.less'

import ''

// 使用 cnpm i sass-loader -D 添加包
// 添加依赖项 node-sass 、 sass、fibers (使用cnpm 下载)
import './css/index.scss'
import webpack from 'webpack'

$(function(){
    $('li:odd').css('backgroundColor', 'orange')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})


/**
 * 1、webpack 能够处理 JS 文件的互相依赖关系
 * 2、webpack 能处理JS的兼容问题，把高级的，浏览器不识别的语法，转为 低级的，浏览器可识别的语法
 * 
 * 使用命令： webpack 要打包的文件路径  打包好的输出文件路径
 * 
 */


/*
 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
    1、运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
    2、这个工具安装完成之后，用法和 webpack 命令的用法 一样
    3、由于 实在项目中，本地安装的 webpack-dev-server ，所以 无法把它当作 脚本命令，在 powershell 终端中直接运行，（只有那些 安装到 全局 -g 的工具，才能在 终端中正常运行）
    4、注意：webpack-dev-server 这个工具，如果想要正常运行，要求：在本地项目中，必须安装 webpack 
    5、webpack-dev-server 打包的生成的文件 ，并没有存放到实际的物理磁盘中，而是直接托管到了 电脑的内存中，所以，在项目的根目录 根本找不到打包好的 bundle,js 
    6、可以认为，webpack-dev-server 把打包好的文件，以一种虚拟的形式，托管到了项目的根目录中，虽然看不到，但是 可以认为，和 dist src node_modules 平级，有一个看不见的文件 叫做bundle.js
 
 */


const person = "Person"


 class Person{
    // 使用static关键字，可以定义静态属性
    // 所谓的静态属性，就是 可以直接通过 类名，直接访问的属性
    // 实例属性，只能通过类的实例，来访问的属性，叫做实例属性
    static info = {name: 'zs', age: 19}
 }

//  访问 Person 类身上的 info 静态属性
 console.log(Person.info)
/*在 webpack 中，默认只能处理一部分 ES6 中的新语法，一些更高级的新语法或者ES7语法，webpack 只能借助于第三方的 loader 
来帮助 webpack 处理，当第三方loader把高级语法转换为 低级语法之后，会把结果返回给 webpack 去打包到 bundle.js 中

通过 Babel ，可以将高级的语法转换为 低级的语法
1、在 webpack中，可以运行如下两套命令，安装两套包，去安装 Babel 相关的loader功能
    1.1、第一套：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
    1.2、第二套：cnpm i babel-preset-env babel-preset-stage-0 -D
2、打开webpack的配置文件，在module节点下的 rules 数组中，添加一个 新的 匹配规则
    2.1、{test:/\.js$/, use: 'babel-loader',exclude:/node_modules/}
    2.2、注意：在配置babel的loader规则时，必须把node_module目录，通过 exclude选项排除掉 原因有两个：
        2.2.1、如果不排除 node_modules，则Babel会把node_modules中所有的第三方 JS 文件，都打包编译，这样会非常消耗CPU ，同时 打包的速度会非常慢
        2.2.2、Babel把所有的node_modules中的JS转化完毕了，但是，项目也无法正常运行
3、在项目的根目录中，新建一个叫做 babelrc 的Babel配置文件，这个配置文件属于JSON格式，所以，再写.baberc 配置的时候，必须符合JSON语法规范，不能注释，字符串必须使用双引号
    3.1、在 .babelrc 写如下的配置: 可将 presets 翻译成 语法

    {
        "presets": ["env","stage-0"],
        "plugins": []
    }

*/
