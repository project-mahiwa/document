# Troubleshooting Mahiwa

マイコン実行時のトラブルシューティング

よくある質問は[こちら](/research/qa/)

## missing imported function

- wasm実行時にimportする関数が足りないときに生じる
- 関数名が正しく読まれていても，wasm3登録時の引数のミスでも発動 `m3_LinkRawFunction(module, serial, "printLong", "v(I)", &m3_printLong);`で`v(I)`を`v(*I)`にしていてもなる．

## \[trap\] stack overflow

- stack-sizeが足りない(Rustのno_std対応ライブラリでも意外とすぐこれになる)
- stack-sizeを増やせばなんとかなる場合もある

## \[trap\] unreachable executed
