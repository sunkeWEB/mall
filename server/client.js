let http = require('http');
let util = require('util');
http.get('http://m.imooc.com/api/search/searchword', (res) => {
    let data = '';
    res.on('data',(chunk)=>{
        data += chunk
    })
    res.on('end',()=>{
        let result = JSON.parse(data);
        console.log(util.inspect(result));
    })
});