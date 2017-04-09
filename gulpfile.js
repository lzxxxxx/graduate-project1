var gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['babeljs'] ,function() {
  // 将你的默认的任务代码放在这
});

gulp.task('babeljs',['copyelse'],() => {
  gulp.src('./source/main.js',{base: './source'})
    .pipe(babel())
    .pipe(gulp.dest('./application'));
});
gulp.task('copyelse', () => {
  gulp.src('./source/!(*.js)')
    .pipe(gulp.dest('./application'));
  gulp.src('./source/imgs/*')
    .pipe(gulp.dest('./application/imgs'));
});
