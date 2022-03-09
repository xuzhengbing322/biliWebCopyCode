const gulp = require('gulp')
const less = require('gulp-less')
const csso = require('gulp-csso')
const typescript = require('gulp-typescript')

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
