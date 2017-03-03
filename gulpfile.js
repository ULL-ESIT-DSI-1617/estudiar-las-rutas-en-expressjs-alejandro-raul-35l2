var gulp = require('gulp');
var exec = require('child_process').exec;
var ghpages = require('gulp-gh-pages');
var shell = require('gulp-shell');


gulp.task('build', function(){
  exec('npm run build');
});


gulp.task('serve', function(){
  exec('node serve.js');
});

gulp.task('deploy', function(){
  exec('npm run deploy');
});