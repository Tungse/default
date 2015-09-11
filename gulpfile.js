'use strict';

var gulp = require('gulp'); 
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

gulp.task('browser-sync', function() 
{
    browserSync.init(
    {
        host: 'test.local',
        port: 1337,
        logSnippet: false,
        notify: false
    });
});

gulp.task('html', function()
{
	return gulp.src('./resources/views/**')
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('styles', function() 
{
    return gulp.src('./resources/assets/less/**/*.less')
    	.pipe(concat('style.min.css'))
    	.pipe(less())
    	.pipe(autoprefixer('last 2 version', '> 1%', 'Android', 'Chrome', 'Firefox', 'Explorer', 'iOS', 'Opera', 'Safari'))
    	.pipe(minify())
    	.pipe(gulp.dest('./public/'))
    	.pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', function() 
{
    return browserify('./resources/assets/js/app.js')
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        // .pipe(streamify(uglify({mangle: false})))
        .pipe(gulp.dest('./public/'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['browser-sync'], function() 
{
    gulp.watch('./resources/views/**', ['html']);
    gulp.watch('./resources/assets/js/**', ['scripts']);
    gulp.watch('./resources/assets/less/**', ['styles']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);