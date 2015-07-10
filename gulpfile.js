/**
 * Created with IntelliJ IDEA.
 *
 * @author: jefferson.souza
 * @dateCreated: 03/07/15
 */
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');

var config =  {
    js: 'www/js',
    css: 'www/css',
    images: 'www/img',
    vendor: 'www/vendor',
    dist: 'www/dist',
    views: 'www/views'
};

gulp.task('clean', function(cb) {
    del([config.dist + '/js', config.dist + '/css'], cb);
});

gulp.task('vendorjs', function(){
    return gulp.src([
        config.vendor + '/angular.js',
        config.vendor + '/angular-resource.js',
        config.vendor + '/angular-sanitize.js',
        config.vendor + '/angular-route.js',
        config.vendor + '/angular-ui-router.js',
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('www/dist/js/'));
});

gulp.task('appjs', function(){
    return gulp.src([config.js + '/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('www/dist/js/'));
});

gulp.task('default', ['clean', 'appjs', 'vendorjs']);
