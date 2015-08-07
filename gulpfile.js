var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');

gulp.task('default', function() {
    return sprity.src({
        src: './src/*.png',
        orientation: 'binary-tree',
        template: 'template/css.hbs',
        prefix: 'sport-icon',
        name: 'sport-icons',
        style: './sport-icons.css'
    }).pipe(gulpif('*.png', gulp.dest('./dist/images/'), gulp.dest('./dist/css/')))
});