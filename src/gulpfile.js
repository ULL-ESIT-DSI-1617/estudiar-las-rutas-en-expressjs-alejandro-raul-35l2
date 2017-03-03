var gulp = require('../node_modules/gulp');
var exec = require('child_process').exec;


gulp.task('uno', function(){
  exec('node ejemplo1.js');
});

gulp.task('dos', function(){
  exec('node ejemplo2.js');
});

gulp.task('tres', function(){
  exec('node ejemplo3.js');
});
