// 这个是入口文件


// 如何在 webpack 构建的项目中，使用 Vue 进行开发

/**
 * 复习：在普通网页中如何使用vue
 *  1、使用 script 标签，引入 vue 的包
 *  2、在 index 页面中，创建一个id为 app div 容器
 *  3、通过new Vue 得到一个vm 的实例
 */

 /**
  * 在 webpack 中尝试 使用Vue
  * 在 webpack 中导入的Vue包功能不全，只提供了runtime-only的方式，并没有提供 像网页中那样的使用方式
  */
//  import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'

/**
 * 分析：
 *  1、找项目根目录中有没有 node_modules 的文件夹
 *  2、在 node_modules中根据报名，找对应的 vue 文件夹
 *  3、在 vue文件夹中，找一个叫 package.json 的包配置文件
 *  4、在 package.json 文件中，查找一个 main 属性【main 属性指定了这个包在被加载时的入口文件】
 */


var login = {
    template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
}



 var vm = new Vue({
     el: '#app',
     data: {
         msg: '123'
     },
     components: {
         login
     }
 })