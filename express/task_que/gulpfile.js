var gulp = reuire('gulp');

gulp.task('hello', function() {
  console.log('hello');
});

gulp.task('goodbye', function() {
  console.log('goodbye');
});

gulp.task('build_js', function() {
  // Do something that "builds stuff"
  var stream = gulp.src('**/*.js')
  .pipe(somePlugin())
  .pipe(someOtherPlugin())
  .pipe(gulp.dest('dist/output.min.js'));
  return stream;
});