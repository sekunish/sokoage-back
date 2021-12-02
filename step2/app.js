// exporessフレームワークの読み込む
const express = require('express');
// cookieを解析するライブラリを読み込む
const cookieParser = require('cookie-parser');
// HTTPリクエストロガーのライブラリを読み込む
const logger = require('morgan');

// experssの実体を作成する
const app = express();

// HTTPリクエストロガー(ログを出力するように設定)
app.use(logger('dev'));
// json形式で送信されてきた場合に解析する設定
app.use(express.json());
// urlencoded形式で送信されてきた場合に解析する設定
app.use(express.urlencoded({extended: false}));
// cookieを利用できるようにする設定
app.use(cookieParser());

// 相対パスを指定して自作モジュールを読み込む
// vscode上でF12で該当ファイルにジャンプできる
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// 読みこんだモジュールをルーティングに割り当てる
app.use('/', indexRouter);
app.use('/users', usersRouter);

// モジュールの外部に公開
module.exports = app;
