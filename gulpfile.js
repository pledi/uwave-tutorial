var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCss = require("gulp-minify-css"),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css');

gulp.task('default', function(){
});

gulp.task('build', function(){
    return gulp.src(['./distr/dependencies/jquery.min.js', './distr/dependencies/jazz.min.js', './distr/dependencies/pagedown.min.js','./distr/sideshow.js','./tutorial/scripts/sideshow.config.js'])
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('css', function () {
    return gulp.src(['./distr/stylesheets/sideshow.min.css', './distr/fonts/sideshow-fontface.min.css'])
    .pipe(minifyCss())
    .pipe(concatCss("./bundle.css"))
    .pipe(gulp.dest('./'));
});
