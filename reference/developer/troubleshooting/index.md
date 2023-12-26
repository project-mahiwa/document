# Troubleshooting Mahiwa

マイコン実行時のトラブルシューティング

よくある質問は[こちら](/research/qa/)

## No serial data received

CPUパニックで再起動を繰り返しているときなどは，書込みが成功しにくい

- 電源ボタン長押ししながら書込の直前まで持っていくと，動く可能性が高い

```sh
A fatal error occurred: No serial data received.
```

のときなどに有効

## A fatal error occurred: Could not open portName, the port doesn't exist

- 適切な権限がない

```sh
sudo chmod a+rw /dev/ttyACM0
```

とかで権限を付与するとOK

## m3_LoadModule memory allocation failed

- マイコンのメモリ不足
- WebAssemblyが線形メモリを1ページ64KiB取るので，memoryのとりすぎなことが多い．
- WebAssemblyビルド時のオプションでメモリ制限して対処
- WASM_STACK_SLOTSの値が大きい場合にも発生(2048byteであれば，多くのマイコンでの動作を確認)
- FreeRTOSでのタスクのスタック割り当てが多い場合でも発生するので，

### 関連Issue

- https://github.com/project-mahiwa/mahiwa-backend/issues/23
- https://github.com/project-mahiwa/mahiwa-backend/pull/33
- https://github.com/project-mahiwa/mahiwa-frontend-go/issues/13

## missing imported function

- wasm実行時にimportする関数情報に過不足があるときに発生
- wasiの関数を誤って呼んだ場合にも起き，TinyGoではprintlnなどを使ってもコンパイラの段階で弾けなくてこのエラーになることがある．
- 関数名が正しくても，wasm3登録時の引数のミスでも発動

例えば

```c
m3_LinkRawFunction(module, serial, "printLong", "v(I)", &m3_printLong);
```

が正しいところを，

```c
m3_LinkRawFunction(module, serial, "printLong", "v(i)", &m3_printLong);
```

になっていてもこのエラーが起きる．

## \[trap\] stack overflow

- stack-sizeが足りない(Rustのno_std対応ライブラリでも意外とすぐこれになる)
- stack-sizeを増やせばなんとかなる場合もある

### 関連PR

- https://github.com/project-mahiwa/mahiwa-frontend-rust/pull/12

## \[trap\] unreachable executed

- 下記のような処理が含まれて到達した場合に発動

```wasm
  (func $signature_mismatch:random (type 8) (result i64)
    unreachable)
```

- TinyGoではうまく実装できなかった処理をこのようにする傾向があるため，コンパイル時の出力を確認することで対処できる可能性が高い

## Debug exception reason: Stack canary watchpoint triggered (wasm3)

### 関連issue

- https://github.com/project-mahiwa/mahiwa-frontend-go/issues/26

## Guru Meditation Error: Core 1 panic'ed (LoadProhibited). Exception was unhandled.

- 不正なメモリ領域へのアクセスでエラーになっている．

## m3_FindFunction function lookup failed

- 開始のための関数を見つけられていないときに発生
- webassembly上ではrunで開始の想定なのに，\_startをfindFunctrionしている場合などに発生
