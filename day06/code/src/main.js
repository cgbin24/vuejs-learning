// 这个JS入口文件
// console.log('ok')

// 在webpack 中构建 vue
// 下载依赖：npm i vue -S

import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

// var login = {
//     template: '<h1>>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }
// 导入login组件
import login from 'login'
// 默认 webpack 无法 处理 .vue 文件，使用 npm i vue-loader vue-template-compiler -D导入相关的loader

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components:{
    //     login
    // }
    // render: function(createElements){
    //     return createElements(login)
    // }
    render: c => c(login)
})




