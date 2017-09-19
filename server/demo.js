// let user = require('./user');
// console.log(`UserName:${user.sayHello()}`);

let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs');
http.createServer((req, res) => {
    // res.end(util.inspect(url.parse('http://127.0.0.1:3000/index.html?a=123#tag')));
    // fs.sendFile('./index.html');
    var pathname = url.parse(req.url).pathname;
    console.log("file"+pathname);
    fs.readFile(pathname.substring(1),function (err, data) {
        if (err) {
            res.writeHeader(404, {
                'Content_type': 'text/html'
            })
        }else{
            res.writeHeader(200,{
                'Content_type':'text/html'
            })
            res.write(data.toString())
        }
        res.end();
    })
}).listen(3000,()=>{
    console.log("http服务启动");
});
