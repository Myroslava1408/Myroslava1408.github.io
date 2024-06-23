const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('style', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});


gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', gulp.series('style'));
});


gulp.task('default', gulp.series('style', 'watch'));
