const http = require('http');
const url = require('url');
const LISTEN_IP = '10.16.96.140';

function start(route, handle){
function onRequest(request, response) {
  let postData = '';
  const pathname = url.parse(request.url).pathname;
  console.log('Request for ' + pathname + ' received.');

  request.setEncoding('utf-8');
  request.addListener('data', function(postDataChunk) {
    postData += postDataChunk;
    console.log("Received POST data chunk '"+
    postDataChunk + "'.");
  });

  request.addListener('end', function() {
    route(handle, pathname, response, postData);
  });
}

http.createServer(onRequest).listen(8080,function(){
console.log('Server has started.');
console.log('running at http://' + LISTEN_IP + ':8080');
});
}

exports.start = start;
