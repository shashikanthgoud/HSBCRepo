var http = require('http');
var url=require('url');
var fs=require('fs');
var path = require('path');

/* Creating http server*/
http.createServer(function(request,response){
	
	var filePath = '.' + request.url;
   
    var extname = path.extname(filePath);
    /*
		This condition checks whether the request is for static resources(local FileSystem paths) with the file extension
		else it will consider the request as server request
	*/
	if(extname){
		switch (extname) {
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
			case '.json':
				contentType = 'application/json';
				break;
			case '.png':
				contentType = 'image/png';
				break;      
			case '.jpg':
				contentType = 'image/jpg';
				break;
			case '.wav':
				contentType = 'audio/wav';
				break;
			default:
				contentType = 'html';
				break;
		}

		fs.readFile(filePath, function(error, content) {
			if (error) {
				if(error.code == 'ENOENT'){
					fs.readFile('./404.html', function(error, content) {
						response.writeHead(200, { 'Content-Type': contentType });
						response.end(content, 'utf-8');
					});
				}
				else {
					response.writeHead(500);
					response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
					response.end(); 
				}
			}
			else {
				response.writeHead(200, { 'Content-Type': contentType });
				response.end(content, 'utf-8');
			}
		});
	}
	else{
		var spath=url.parse(request.url);
		
		/* This is to define server routes*/
		switch(spath.pathname){
			case '/':
				var index=fs.readFileSync("index.html");
				response.writeHead(200, {'Content-Type':'html','access-control-allow-origin':'*'});
				response.end(index);
				break;
			case '/products':
				var products=fs.readFileSync("products.json");
				response.writeHead(200, {'Content-Type':'json','access-control-allow-origin':'*'});
				response.end(products);
				break;
			default:
				response.writeHead(404);
				response.end('Page Not Found');
		}
	}
}).listen(8080);