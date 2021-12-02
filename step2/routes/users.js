// exporessフレームワークの読み込む
const express = require('express');
// これが読み込まれる時点ではexpressの実体は作成済み.
// 本ファイルは任意のルーティング(URL)にマッピングするためRouterを取得している
// このrouterは本ファイル用のもの
const router = express.Router();

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  res.send(`${req.params.userId} のデータを返却する`);
});

/* POST users listing. */
router.post('/:userId', function(req, res, next) {
  res.send(`${req.params.userId} のデータを登録する`);
});

/* PUT users listing. */
router.put('/:userId', function(req, res, next) {
  res.send(`${req.params.userId} のデータを更新する`);
});

/* DELETE users listing. */
router.delete('/:userId', function(req, res, next) {
  res.send(`${req.params.userId} のデータを削除する`);
});

module.exports = router;
