var path = require('path'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

var libs = [
    'bower_components/angular/angular.js',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap/dist/js/bootstrap.js'
]

gulp.task('js:lib', function() {
    gulp.src(libs)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('js:app', function() {
    gulp.src('public/js/app/**/*')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/js'))
        .pipe(livereload());
});

gulp.task('less', function() {
    gulp.src('public/css/less/style.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        port: 3000,
        livereload: true
    });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/css/less/**/*.less', ['less']);
    gulp.watch('public/js/app/**/*.js', ['js:app']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['less', 'js:lib', 'js:app', 'watch', 'connect']);
