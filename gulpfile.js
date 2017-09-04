var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('app/scss/style.scss')
        .pipe(sass(
            {
                style: 'compressed',
            }
        ))
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('app/css'))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/css/**/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
});