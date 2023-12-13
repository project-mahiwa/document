# よくある質問

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
