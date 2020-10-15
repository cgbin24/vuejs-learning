// 由于webpack 是基于 Node 进行构建的，所以webpack 配置文件中，任何合法的Node代码都是支持的
var path = require('path')

// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动打包好的bundle注入到页面底部
// 配置插件需要在导出的对象中，挂在一个plugin节点
var htmlWebpackPlugin = require('html-webpack-plugin')


// 当以命令形式运行 webpack 或者 webpack-dev-server 的时候。工具会发现 并没提供要打包的 文件的 入口和出口 文件，此时，他会检查项目根目录的配置文件，并读取这个文件
// 就拿到了导出的这个对象了，然后使用这个对象进行打包处理
module.exports = {
    entry: path.join(__dirname, './src/main.js'),   // 入口文件
    output: { // 指定输出文件
        path: path.join(__dirname, './dist'),   // 输出路径
        filename: 'bundle.js' // 指定输出文件的名称
    },
    plugins: [ // 所有的webpack 插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
            filename: 'index.html'  // 设置生成的内存页面的名称
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    resolve: {
        alise: { // 修改 Vue 被导入时的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}


