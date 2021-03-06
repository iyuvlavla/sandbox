const querystring = require('querystring'),
      fs = require('fs'),
      path = require('path');

const contentType = {  
    '.html': 'text/html',  
    '.htm' : 'text/htm',  
    '.css' : 'text/css',  
    '.js' : 'text/javaScript; charset=utf-8',  
    '.json' : 'application/json; charset=utf-8',  
    '.xml' : 'application/xml; charset=utf-8',  
    '.jpeg' : 'image/jpeg',  
    '.jpg' : 'image/jpg',  
    '.gif' : 'image/gif',  
    '.png' : 'image/png',  
    '.mp3' : 'audio/mp3'  
};

function fileAccess(response, postData, pathname) {
    console.log('Request handler "fileAccess" was called.');
    
    const fullPath = __dirname + pathname;
    response.writeHead(200, {'Content-Type': contentType[path.extname(fullPath)] || 'text/plain'});
      fs.readFile(fullPath, {encoding : null}, function(err, data) {
    if (err) {
      console.log('No request handler found for ' + pathname);
      response.write("404 Not Found");
      response.end();
    } else {
      response.end(data);
    }
  });
}

exports.fileAccess = fileAccess;