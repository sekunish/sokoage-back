// exporessフレームワークの読み込む
const express = require('express');
// これが読み込まれる時点ではexpressの実体は作成済み.
// 本ファイルは任意のルーティング(URL)にマッピングするためRouterを取得している
// このrouterは本ファイル用のもの
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello world.');
});

module.exports = router;
