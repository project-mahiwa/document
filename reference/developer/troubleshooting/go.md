# Troubleshooting Go

Goプログラミングのトラブルシューティング

よくある質問は[こちら](/research/qa/)

## tinygo:wasm-ld: warning: function signature mismatch:

## target.jsonのldflgasの設定について

- ldflagsはビルド時に内部で呼ばれる引数
- TinyGoではLLVMが採用されているので，LLVMのオプションを指定する形になる．

```
ldflgas="-help"
```

にしてbuildすることでオプションの全表示が可能．
