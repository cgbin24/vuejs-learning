
const path = require('path')
// 导入在内存中生成 HTML 页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

// 其实就是一个 JS 文件 通过 Node中的模块操作， 向外暴露一个 配置对象
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ]
}