generateGitbook();

function generateGitbook() {
    var exec = require('child_process').exec;
    var cmd  = './node_modules/.bin/gitbook build ./docs ./gh-pages';

    exec(cmd, function(error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.log(error);
    });
}
