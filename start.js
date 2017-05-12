var http = require("http");
var fs = require('fs');
var url = require('url');
var filename = "index.html";
var path = require('path');
var mimeTypes = {
'.js':'text/javascript',
'.css':'text/css',
'.html':'text/html'
};
http.createServer(function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    if(pathname == "/"){
        pathname = '/index.html';
    }
    var extname = path.extname(pathname);
    console.log(extname);
    var mimeType = mimeTypes[path.extname(pathname)];
    pathname = pathname.substring(1, pathname.length);
    fs.readFile(pathname, 'utf8', function(error, data){
        if(error){
            console.log('not open file ' + pathname + 'for reading\n');
        } else{
            console.log(pathname + " " + mimeType +"\n");
            response.writeHead(200, {"Content-Type": mimeType});
            response.end(data);
        }
    })
}).listen(8080, '127.0.0.6');