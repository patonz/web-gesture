var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      liverealod: true,
      open: true,
      https: true
    }));
});