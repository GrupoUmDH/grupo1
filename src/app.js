const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require("cookie-session");
const methodOverride = require('method-override');
const favicon = require('serve-favicon');

const homeRouter = require('./routes/index');
const userRouter = require('./routes/users');
const produtosRouter = require('./routes/produtos');
const carrinhoRouter = require('./routes/carrinho');
const painelRouter = require('./routes/painel');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//METHOD-OVERRIDE
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/img', 'favicon.ico')));

app.use(cookieSession({
    name: 'session',
    keys: ['key1']
}));

app.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error.field);
});

//INDEX - (HOME, SUPORTE, SOBRE NÓS)
app.use('/', homeRouter);
app.use('/index', homeRouter);

//USERS - (PAINEL USUÁRIO, LOGIN, CADASTRO)
app.use('/login', userRouter);

//CARRINHO - (CARRINHO, COMPRA, PAGAMENTO)
app.use('/carrinho', carrinhoRouter);

//PRODUTOS - (FILMES, SÉRIES -ADD/EXCLUI PRODUTOS)
app.use('/filmes', produtosRouter);
app.use('/produtos', produtosRouter);

//PAINEL ADM
app.use('/painel', painelRouter);

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