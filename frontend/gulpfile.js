// 安装插件
// sudo npm install gulp-jshint  gulp-sass gulp-concat gulp-uglify gulp-util gulp-rename gulp-cssmin gulp-imagemin gulp-replace md5-file imagemin-pngquant imagemin-jpegtran --save-dev

// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
/* var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var cssmin      = require('gulp-cssmin');
var imagemin    = require('gulp-imagemin');
var replace     = require('gulp-replace');
var gutil       = require('gulp-util');
var livereload  = require('gulp-livereload');
var amdOptimize = require('amd-optimize');
var md5         = require("md5-file");
var pngquant    = require('imagemin-pngquant');
var jpegtran    = require('imagemin-jpegtran'); */

var paths = {
    js: [
        // 'js/app/*.js'
        'js/app/program.js'
    ],
    img: 'img/**/*',
    // sass: 'css/_sass/*.scss',
    sass: 'css/_sass/program.scss',
    css: 'css/*.css',
    // html: 'html/*.html'
    html: 'html/progarm.html'

}

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// 默认任务
gulp.task('default', function(){
    var js = ['lint', 'watchjs'];
    var sass = ['sass'];
    var css = ['watchcss'];
    gulp.watch(paths.js, ['watchjs']);
    // gulp.watch(paths.js, ['lint']);
    gulp.watch(paths.sass, sass);
    // gulp.watch(paths.css, css);
});
