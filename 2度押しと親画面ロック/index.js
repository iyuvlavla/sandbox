const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

let handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['fileAccess'] = requestHandlers.fileAccess;

server.start(router.route, handle);