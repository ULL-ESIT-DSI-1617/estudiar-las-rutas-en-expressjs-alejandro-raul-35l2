var ghpages = require('gh-pages');
var path    = require('path');
var json    = require('../package.json');

ghpages.publish(path.join(__dirname, '/../gh-pages'), {
    repo:     json.repository.url,
    message: 'Actualizando',
    logger:   log
}, log);

function log(m) { if (m) { console.error(m); } }
