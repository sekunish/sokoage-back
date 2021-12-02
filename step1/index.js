// exporessフレームワークの読み込む
const express = require('express');
// experssの実体を作成する
const app = express();
// WEBサーバーが待つポート番号
const port = 3000;

/**
 * 以下の変数については、Javaのサーブレットと同じ考えで一旦OK
 * req:Request
 * res:Response
 */
// ルートにgetでアクセスした場合の処理
app.get('/', (req, res) => {
  // 以下の文字列を返却する
  res.send('Hello World!');
});

// リッスンポートの開始
app.listen(port, () => {
  // 開始できた場合のcallback処理
  console.log(`Example app listening at http://localhost:${port}`);
});
