var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCss = require("gulp-minify-css"),
    concat = require('gulp-concat');

gulp.task('default', function(){
});

gulp.task('build', function(){
    gulp.src('./distr/*.js')
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});
