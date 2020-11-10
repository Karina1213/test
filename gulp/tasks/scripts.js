let uglify = require('gulp-uglify-es').default;

module.exports = function () {
	
	$.gulp.task('scripts', function () {
		return $.gulp.src('src/js/main.js')
				.pipe(uglify())
				.pipe($.gulp.dest('build/js'))
				.pipe($.bs.reload({
					stream: true
				}));
	});
}