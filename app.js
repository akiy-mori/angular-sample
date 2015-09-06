var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var app = express();

/*
  ビューテンプレートエンジンの設定
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*
  ログ出力の設定
*/
app.use(logger('dev'));

/*
  静的コンテンツの設定
*/
app.use(express.static(path.join(__dirname, 'public')));

/*
  エラーハンドリングの設定
*/
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
