const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformacaoJS(cb) {
    return  gulp.src('src/**/*.js')
                .pipe(babel({   // plugin do babel que vai converter o codigo js atual para uma versao mais antiga compativel com outros navegadores antigos
                    comments: false, // ignora os comentarios no codigo
                    presets: ["env"] // usa a versão mais recente do js (poderia ser, por exemplo, a versão ES5 passada aqui)
                }))
                .pipe(uglify()) // pega todo o codigo para .min (minificado)
                .on('error', err => console.log(err)) // catch de erros
                .pipe(concat('codigo.min.js')) // arquivo final com a concatenacao de todos os processos dos arquivos anteriores
                .pipe(gulp.dest('build')); // pasta final
}

function fim(cb) {
    console.log('Fim!!!');
    return cb();
}

exports.default = series(transformacaoJS, fim);