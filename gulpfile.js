// Require Gulp and Plugins
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Lint
gulp.task('lint', function() {
    return gulp.src('public/assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Sass
gulp.task('sass', function() {
    return gulp.src('public/assets/scss/*.scss')
        .pipe(sass())
        // .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('public/assets/css'));
});

// Minify & Concatenation
gulp.task('scripts', function() {
    // return gulp.src('js/*.js')
    //     .pipe(concat('all.js'))
    //     .pipe(gulp.dest('dist'))
    //     .pipe(rename('all.min.js'))
    //     .pipe(uglify())
    //     .pipe(gulp.dest('dist'));
});

// Watcher
gulp.task('watch', function() {
    gulp.watch('public/assets/js/*.js', ['lint', 'scripts']);
    gulp.watch('public/assets/scss/*.scss', ['sass']);
});

// Default taks
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
