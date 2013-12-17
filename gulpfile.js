var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var lr = require('tiny-lr')
var rw = require('./rework')({debug : false});
var server = lr();

gulp.task('scripts', function() {
	gulp.src(['src/**/*.js'])
		.pipe(browserify())
		.pipe(concat('dest.js'))
		.pipe(gulp.dest('build'))
})

gulp.task('styles', function() {
	gulp.src(['css/**'])
		.pipe(rw())
		.pipe(fs.createWriteStream(__dirname + '/style.css'))
})

gulp.task('default', function() {
	server.listen(9966, function() {
		gulp.watch('src/**', function() {
			gulp.run('scripts')
		})
		gulp.watch('css/**', function() {
			gulp.run('styles')
		})
	})
})
