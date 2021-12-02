// exporessフレームワークの読み込む
const express = require('express');
// これが読み込まれる時点ではexpressの実体は作成済み.
// 本ファイルは任意のルーティング(URL)にマッピングするためRouterを取得している
// このrouterは本ファイル用のもの
const router = express.Router();

const SSOHandler = function(req, res, next) {
  // 例えばここで、ログイン情報の認証&認可を行う
  console.log('SSOHandlerを通った');

  next(); // ☆☆☆演習：これをコメントアウトしてみるとどうなるのか？
};

router.use('/', SSOHandler);

router.all('/', function(req, res, next) {
  // 例えばここで、このルーティングのみ実施する処理を書く
  console.log('all1を通った');

  next();
});

router.get('/', function(req, res, next) {
  // 例えばここで、入力チェックを行う
  console.log('get1を通った');

  next();
}, function(req, res, next) {
  console.log('get2を通った');
  res.send('Hello world.');
});

router.all('/', function(req, res, next) {
  // 例えばここで、このルーティングのみ実施する処理を書く
  console.log('all2を通った');

  next();
});

module.exports = router;
