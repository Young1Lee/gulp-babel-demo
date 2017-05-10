// gulp
const gulp = require("gulp");
const babel = require('gulp-babel');

// es6 编译
gulp.task("es6", () => {

	return gulp.src("./src/es6.js")
		   .pipe(
		   		babel({"presets": ["es2015"]})
		   	)
		   .pipe(gulp.dest("./es5/"))

});

// 监听
gulp.task("watch", () => {

	gulp.watch("./src/es6.js", ["es6"]);

});

// gulp
gulp.task("default", ["es6", "watch"]);

