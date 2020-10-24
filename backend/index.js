const 
    server = require('./core/express'),
    paths = require('./core/config')
    // db = require('./core/config/sequalize');
console.log(paths)
server.initExpress();