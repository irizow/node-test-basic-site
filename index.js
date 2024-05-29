let http = require('http');
let fs = require('fs')
let url = require('url');

http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let pathname = q.pathname
    let filename = getPath(pathname)
    function getPath(pathname) {
        switch(pathname) {
            case '/':
                return './index.html';
                break;
            case '/about':
                return './about.html';
                break;
            case '/contact-me':
                return './contact-me.html';
                break;
            case '/index':
                return './index.html';
                break;
            default:
                return './404.html'
        }
    }
    
    console.log(filename)
    fs.readFile(filename, function(err, data) {
        if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('404 page not found');
        }
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write(data);
    res.end()
})
}).listen(8080);