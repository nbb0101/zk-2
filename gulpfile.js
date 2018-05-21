var gulp = require('gulp');
var sass = require('gulp-sass');
var minCss = require('gulp-clean-css');
var sequence = require('gulp-sequence');
var server = require('gulp-webserver');

gulp.task('css', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest('src/css/'))
});

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8090,
            open: true,
            livereload: true
        }))
});

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['css'])
});

gulp.task('default', function(cb) {
    sequence('css', 'server', 'watch', cb);
})