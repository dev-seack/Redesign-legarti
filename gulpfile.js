var gulp = require("gulp");
var path = require("path");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();
const { watch } = require("gulp");

var Paths = {
  HERE: "./",
  CSS: "./styling/**",
  SCSS: "./styling/**",
  JS: "./scripts/*.js"
};

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("compile-scss", function() {
  return gulp
    .dest(Paths.SCSS)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("serve", ["compile-scss", "browser-sync"], function() {
  gulp.watch(Paths.SCSS, ["compile-scss"]);
  gulp.watch("*.html", browserSync.reload);
  gulp.watch("./pages/*.html", browserSync.reload);
  gulp.watch("./pages/*/*.html", browserSync.reload);
  gulp.watch(Paths.JS, browserSync.reload);
});

gulp.task("default", ["serve"]);
