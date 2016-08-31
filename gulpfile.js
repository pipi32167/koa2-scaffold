const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const runSequence = require('run-sequence')

gulp.task('nodemon', () => {
  nodemon({
    script: './app.js',
    ext: 'js',
    watch: ['lib', 'app.js'],
    ignore: ['test'],
    delay: 1.5,
  }).on('restart', () => {
    console.log('server restarted!')
  })
})


gulp.task('default', () => {
  return runSequence(
    'nodemon'
  )
})

