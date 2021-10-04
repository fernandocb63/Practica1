const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const tsc = require('gulp-typescript');

gulp.task('styles', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/styles'));
});

gulp.task('scripts', function () {
    const configFile = tsc.createProject('tsconfig.json');
    return configFile.src() 
        .pipe(configFile())
        .pipe(gulp.dest('assets/scripts')); 
});

// npm run serve
gulp.task('serve', function (done) {
    const allTasks = gulp.parallel('styles:watch', 'scripts:watch');
    allTasks();
    done();
});


gulp.task('scripts:watch', gulp.series('scripts', function (done) {
    gulp.watch('src/scripts/**/*.ts', gulp.series('scripts'));
    done();
}));

gulp.task('styles:watch', gulp.series('styles', function (done) {
    gulp.watch('src/styles/**/*.ts', gulp.series('styles'));
    done();
}));

gulp.task('bundle', function () {
    return browserify({ entries: ['assets/scripts/index.js', 'scripts/index.ts'] }) 
        .bundle()
        .pipe(source('app.min.js')) 
        .pipe(gulp.dest('dist/js')); 
})
