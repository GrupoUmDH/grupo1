var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/index');
var userRouter = require('./routes/users');
var produtoRouter = require('./routes/produto');
var categoriasRouter = require('./routes/categorias');
var carrinhoRouter = require('./routes/carrinho');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//app.use(express.favicon(__dirname + '/public/images/ico/favicon.ico'));

app.use('/', homeRouter);
app.use('/index', homeRouter);

app.use('/painel-user', userRouter);
app.use('/cadastro', userRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/categorias', categoriasRouter);
app.use('/compra',carrinhoRouter);
app.use('/produto', produtoRouter);


// catch 404 and forward to error handler
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