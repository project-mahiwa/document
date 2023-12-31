# Add API

## 新しいAPIを追加するときの注意

- WASI preview1およびWASIのW3C Proposalと名前がかぶっていないか(TinyGoではwasm32-unknown-unknownのLLVMターゲットでないため，WASIの関数名が優先される(モジュールが違っても))
- 既に作成済みのAPIと名前がかぶっていないか
  - **module名が違っても関数名が同じだと作に定義された方に吸われて動作しない(本来であれば名前空間が違うので問題ないはずだがこれは仕様か?要出典)**
