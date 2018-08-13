const LISTEN_IP = 'example adress';
const LISTEN_PORT = 8080;
const ROOTPATH = '/index.html';

const http = require('http'),
  fs = require('fs'),
  path = require('path');

const contentType = {
  '.html': 'text/html',
  '.htm': 'text/htm',
  '.css': 'text/css',
  '.js': 'text/javaScript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.png': 'image/png',
  '.mp3': 'audio/mp3'
};

function start() {
  function onRequest(req, res) {
    let postData = '';
    if (req.url == '/') {
      filePath = ROOTPATH;
    } else {
      filePath = req.url;
    }
    console.log('1 filePath : ' + filePath);
    const fullPath = __dirname + filePath;
    console.log('2 Expanded : ' + path.extname(fullPath));
    console.log('3 reqPath : ' + fullPath);

    req.setEncoding('utf-8');
    req.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log('Received POST data chunk ' + postDataChunk);
    });

    req.addListener('end', function() {
      res.writeHead(200, {
        'Content-Type': contentType[path.extname(fullPath)] || 'text/plain'
      });
      //res.write(postData);
      fs.readFile(fullPath, function(err, data) {
        if (err) {
          res.write('そんなものウチにはない404 Not Found・・・');
          res.end();
        } else {
          res.end(data, 'UTF-8');
        }
      });
    });
  }
  http.createServer(onRequest).listen(LISTEN_PORT);
}
exports.start = start;

console.log('Server running at http://' + LISTEN_IP + ':' + LISTEN_PORT);
