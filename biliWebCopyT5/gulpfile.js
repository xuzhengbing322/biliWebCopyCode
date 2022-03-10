const gulp = require('gulp')
const less = require('gulp-less')
const csso = require('gulp-csso')
const typescript = require('gulp-typescript')
// const tsify = require('tsify')
// const browserify = require('browserify')
// const source = require('vinyl-source-stream')
const webserver = require('gulp-webserver')
let watch
let web

gulp.task('copyhtml', () => {
  return gulp
    .src('./src/html/index.html')
    .pipe(gulp.dest('./dist/html'))
})

gulp.task('cssmin', () => {
  return gulp
    .src('./src/less/biliWebCode.less')
    .pipe(less())
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('type', () => {
  return gulp
    .src('./src/ts/biliWebCode.ts')
    .pipe(typescript({
      noImplicitAny: true,
      outFile: 'biliWebCode.js'
    }))
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('images', () => {
  return gulp
    .src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
})

// gulp.task('tschange', () => {
//   return browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['./src/ts/biliWebCode.ts'],
//     cache: {},
//     packageCache: {}
//   }).plugin(tsify).bundle()
//     .pipe(source('biliWebCode.js'))
//     .pipe(gulp.dest('./dist/js'))
// })

gulp.task('web', () => {
  return gulp
    .src('./dist')
    .pipe(webserver({
      host: 'localhost',
      port: '8080',
      livereload: true,
      open: '../html/index.html'
    }))
})

gulp.task('watch', () => {
  gulp.watch('./src/ts/biliWebCode.ts', ['type'])
  gulp.watch('./src/less/biliWebCode.less', ['cssmin'])
  gulp.watch('./src/images/**', ['images'])
  gulp.watch('./src/html/index.html', ['copyhtml'])
})

module.exports.default = gulp.series(
  gulp.parallel('images', 'cssmin', 'copyhtml', 'type'),
  web,
  watch
)
