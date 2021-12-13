const gulp = require('gulp');
const inlinesource = require('gulp-inline-source');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const del = require('del');

// Delete everything from the build folder except the RateCalcNext.html file
const clean = () => del(['build/*', '!build/RateCalcNext.html']);

const build = () => {
    return gulp
        .src('./build/index.html')
        .pipe(replace('.js"></script>', '.js" inline></script>'))
        .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
        .pipe(
            inlinesource({
                compress: false,
                ignore: ['png'],
            })
        )
        .pipe(rename('RateCalcNext.html'))
        .pipe(gulp.dest('./build'));
};

exports.default = gulp.series(build, clean);
