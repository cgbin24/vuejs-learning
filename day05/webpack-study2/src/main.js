// 这个是 main.js 项目的JS入口文件

// 导入jQuery
import $ from 'jquery'  // 等价于 const $ = require('jquery')


$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})


