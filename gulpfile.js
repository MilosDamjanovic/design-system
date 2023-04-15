const gulp = require('gulp');

function copyStencilFiles() {
  return gulp.src(['./dist/**/*']).pipe(gulp.dest('./public/stencil'));
}

gulp.task('stencil-copy', copyStencilFiles);
