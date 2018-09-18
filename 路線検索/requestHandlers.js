const querystring = require('querystring'),
      fs = require('fs'),
      path = require('path');

function start(response, postData) {
    console.log('Request handler "start" was called.');

    let body = fs.readFileSync('index.html', 'utf-8');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log('Request handler "update" was called.');


}

exports.start = start;
exports.upload = upload;

