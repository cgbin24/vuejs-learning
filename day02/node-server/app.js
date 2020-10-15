// 导入 http 内置
const http = require('http');
const urlModule = require('url')

// 创建一个 http 服务器
const server = http.createServer();
// 监听 http 服务器的 request 请求
server.on('request', function (req, res) {
        // write your code here ...
    // const url = req.url;
    const {pathname: url,query} = urlModule.parse(req,url, true)


    var data = {
        name: 'sss',
        age: 18,
        gender: '女孩子'
    }

    if(url === '/getscript'){
        // 拼接一个合法的js脚本。，这里拼接的是一个方法调用
        // var scriptStr = 'show()';
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`;
        // res.end发送给客户端
        res.end(scriptStr)
    }else{
        res.end('console.log(404)')
    }
});

// 指定端口号并启动服务器监听
server.listen(3000, function () {
   console.log('server client at http://127.0.0.1:3000')
});

