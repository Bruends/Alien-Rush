const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel  = require('gulp-babel');
const image = require('gulp-image');

// concatena os scripts  
// passa pra es5 para melhor compatibilidade com browsers
// e minifica
gulp.task('compress-js', () =>{
   gulp.src('./src/*.js')
  .pipe(concat('gameProd.min.js'))
  .pipe(babel({ presets: ['env'] }))
  .pipe(uglify())
  .pipe(gulp.dest('./'))
});

// otimiza imagens
gulp.task('compress-imgs', () => {
  gulp.src('./images/*')
    .pipe(image())
    .pipe(gulp.dest('./images/'));
});

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['compress-js']);
})

gulp.task('default', ['compress-js', 'watch']);