var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('createCss', function(){
	gulp.src('style/style.less').pipe(less()).pipe(gulp.dest("style/"));
});

