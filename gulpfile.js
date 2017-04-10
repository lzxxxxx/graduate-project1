var gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['babeljs'] ,function() {
  // 将你的默认的任务代码放在这
});

gulp.task('babeljs',['copyelse'],() => {
  gulp.src('./application/main.js')
    .pipe(babel())
    .pipe(gulp.dest('./application'));
});
gulp.task('copyelse', () => {
  gulp.src('./source/*')
    .pipe(gulp.dest('./application'));
  gulp.src('./source/imgs/*')
    .pipe(gulp.dest('./application/imgs'));
  gulp.src('./source/iconfont/*')
    .pipe(gulp.dest('./application/iconfont'));
});
