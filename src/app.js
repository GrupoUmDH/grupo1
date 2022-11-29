var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

<<<<<<< HEAD
var homeRouter = require('./routes/home');
=======
var indexRouter = require('./routes/index');
>>>>>>> vagner
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
<<<<<<< HEAD
app.set('views', path.join(__dirname, './views'));
=======
app.set('views', path.join(__dirname, 'views'));
>>>>>>> vagner
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD

//app.use(express.favicon(__dirname + '/public/images/ico/favicon.ico'));

app.use('/', homeRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, '../public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
=======
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
>>>>>>> vagner
});

// error handler
app.use(function(err, req, res, next) {
<<<<<<< HEAD
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
=======
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
>>>>>>> vagner
