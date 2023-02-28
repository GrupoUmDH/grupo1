var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

var favicon = require('serve-favicon')

var homeRouter = require('./routes/index');
var userRouter = require('./routes/users');
var produtosRouter = require('./routes/produtos');
var carrinhoRouter = require('./routes/carrinho');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//METHOD-OVERRIDE
app.use(methodOverride('_method'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/img', 'favicon.ico')));

//METHOD-OVERRIDE
app.use(methodOverride('_method'));

app.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error.field);
});

//INDEX - (HOME, SUPORTE, SOBRE NÓS)
app.use('/', homeRouter);
app.use('/index', homeRouter);

//USERS - (PAINEL USUÁRIO, LOGIN, CADASTRO)
app.use('/painel-user', userRouter);
app.use('/cadastro', userRouter);

//CARRINHO - (CARRINHO, COMPRA, PAGAMENTO)
app.use('/carrinho', carrinhoRouter);

//PRODUTOS - (FILMES, SÉRIES -ADD/EXCLUI PRODUTOS)
app.use('/filmes', produtosRouter);
app.use('/produtos', produtosRouter);

// catch 404 and forward to error handler - MIDDLEWARE DE STATUS 404
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;