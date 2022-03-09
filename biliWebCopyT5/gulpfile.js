const gulp = require('gulp')
const less = require('gulp-less')
const csso = require('gulp-csso')
const ts = require('gulp-typescript')

gulp.task('copy', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('cssmin', () => {
  gulp.src('./src/biliWebCode.less')
    .pipe(less())
    .pipe(csso())
    .pipe(gulp.dest('dist'))
})

gulp.task('default', () => {
  gulp.src('./src/**/*.ts')
    .pipe(ts())
    .pipe(gulp.dest('dist'))
})
