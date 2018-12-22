const express = require('express');
const serveIndex = require('serve-index');
const serveStatic = require('serve-static');
const path = require('path');
const server = express();
const port = 8888;
function setHeaders(res, filepath) {
    res.setHeader('Content-Disposition', 'attachment; filename=' + path.basename(filepath));
}
const dirToServe = process.cwd();
server.use('/', serveIndex(dirToServe, {icons: true}));
server.use('/', serveStatic(dirToServe, {setHeaders: setHeaders}));
server.listen(port, () => {
    console.log('listening on port ' + port);
});
