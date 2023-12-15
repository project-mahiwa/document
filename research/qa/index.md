# よくある質問

トラブルシューティングは[こちら](/reference/developer/troubleshooting)

## printIntとprintLongで表せる数が同じなのはなぜか

Cの仕様で，intとlongの表せる範囲が同じになっている． 詳細：https://learn.microsoft.com/ja-jp/cpp/c-language/cpp-integer-limits?view=msvc-170

同じ範囲だが分けて関数を用意している理由は，型のチェックでコンパイルエラーになることを防ぐためである(Arduino関数にはintを返すものとlongを返すものが混在しているため)

## GoでGoでなくTinyGoでビルドするのはなぜか

Go1.21からWebAssemblyへのコンパイルに対応したが，任意の外部関数をimportする仕組みがないため，TinyGoを用いている．  
TinyGoも本来であればLLVMのtargetでwasm32-unknown-unknownを指定したいが，[TinyGoのIssueにもある通り](https://github.com/tinygo-org/tinygo/issues/3068)それがまだ実現できていないのでやむを得ずwasm(wasm32-unknown-wasi)を利用しているを利用している．

TinyGoではwasiとwasmをtargetで指定できるが，内部的にはどちらもLLVMのターゲットをwasm32-unknown-wasiとしているため，現行最新のTinyGo 0.30の時点ではwasiを指定することを推奨している．

## RustやGoなどUTF-8な文字コードに依存した環境で文字列を使用して問題ないか

UTF-8にはASCIIとの互換性が有り，数値やアルファベットであれば問題なく動作する．
一方で日本語や絵文字などは問題となり，

```rust
serial::println("😀");
```

のようなコードは，`cargo build --release`でコンパイルは通り，シリアル通信でも

```shell
Project Mahiwa : WebAssembly launch
😀
```

上記のように出力できる←想定外

確実なのはASCIIで表現できる文字だが，一応UTF8の4byte文字でも出力できるっぽい？

## Goのgoroutineはどうなる？

WebAssemblyは並列実行できない．

## TinyGoの機能を使うとどうなる？

## WASIを使うとどうなる？
