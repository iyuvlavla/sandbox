const server = require('./server'),
      router = require('./router'),
      requestHandlers = require('./requestHandlers'),
      handler_fa = require('./handler_fileaccess'),
      handler_sa = require('./seach');

let handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/fileAccess'] = handler_fa.fileAccess;
handle['/seach'] = handler_sa.stseach;

server.start(router.route, handle);