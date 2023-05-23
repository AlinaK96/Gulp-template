const gulp = require('gulp')
const less = require('gulp-less')
const del = require('del')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const autoPrefixer = require('gulp-autoprefixer')
const imageMinimalize = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin');


const path = {
    html: {
        src: './*.html',
        dest: 'dist'
    },
    styles: {
        src: 'src/styles/**/*.less',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/img/*',
        dest: 'dist/img'
    }
}


//обработка и сборка html файлов

function html () {
    return gulp.src(path.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.html.dest));
}

//очистка файла с финальным кодом dist
function clean () {
    return del(['dist'])
}

//обработка и сборка файлов styles
function styles (){
    return gulp.src(path.styles.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoPrefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(rename({
        basename: 'main',
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.styles.dest))
}

//обработка и сборка js файлов
function scripts (){
    return gulp.src(path.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js')) //обьеденить и сжать все файл в один
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.scripts.dest))
}

//при изменении и добавлении код из styles будет выполняться автоматически
function watch () {
    gulp.watch(path.styles.src, styles)
    gulp.watch(path.scripts.src, scripts)
}

function img () {
    return gulp.src(path.images.src)
    .pipe(imageMinimalize({
        progressive: true
    }))
    .pipe(gulp.dest(path.images.dest))
}

const build = gulp.series(clean, html, gulp.parallel(styles, scripts, img), watch)

exports.clean = clean
exports.img = img
exports.html = html
exports.styles = styles
exports.scripts = scripts
exports.watch = watch
exports.build = build

//задача по умолчанию - при вызове gulp
exports.default = build