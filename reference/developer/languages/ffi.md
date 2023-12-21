# FFIの方針

webassemblyの数値型はi32,i64,f32,f64のみである．
Go,C/C++,Rustではより多くの型が存在するが，例えばint8などを用いてもwebassemblyへのコンパイル時により大きな型に入れられてしまう．
さらに型の違いにより，適切に値が使用できないことがわかっているため，webassemblyへのコンパイル前，実行時リンクの両方に置いて型をwebassemblyの型に合わせる．

下記の表の通りである．

| webassemblyでの型 | mahiwa-backendでの型                                    | mahiwa-frontend-rustでの型 | mahiwa-frontend-goでの型 | wasm3 i_signatureでの型 |
| ----------------- | ------------------------------------------------------- | -------------------------- | ------------------------ | ----------------------- |
| i32               | int,long,int8_t,int16_t,int32_t,uint8_t,uint16_t,       | i32                        | int32                    | i                       |
| i64               | int64_t,unsigned int,unsigned long, uint32_t,(uint64_t) | i64                        | int64                    | I                       |
| f32               | float,float_t                                           | f32                        | float32                  | f                       |
| f64               | double,double_t                                         | f64                        | float64                  | F                       |

### C/C++での補足

Mahiwaの想定環境に置いて型をsizeofで調べたところ，https://github.com/project-mahiwa/benchmark-c/issues/11 の通りとなった．

このことを踏まえると

- int,long,unsigned longは同じ大きさであり，どれも4byteである
- floatは4byte, doubleは8byteである
- int32_t,int64_tでは名前と同様のサイズを確保できている
- 現状ではuint64_tの存在はないが，出てきた場合は桁溢れの可能性が有りつつもint64_tと同等とする

ことから先述のような型の変換とした．

## 型

### C/C++ to wasm3

- 原則PlatformIOで読んでいるライブラリ関数の型に従う
- Cでのdoubleはf64で表現.
- 実装がマクロなどで最適化されており型がない場合はintを中心とした適切な型を採用
- Arduino側の定義でintになっているところは32bitでマイコンが動くことを想定してi32とする

### Languages to WebAssembly

- WebAssemblyにはi32,i64,f32,f64しかないのでuint8などを使うことでメモリ削減などに繋がらないが、将来の型対応やオーバーフローをコンパイラのレベルで防ぐことを目的として、mahiwa-backend側に合わせる。

## 定数

- WebAssemblyを経由するタイミングで数値になる上、Arduinoの定数系も実際は数値なので、最初から数値だと無駄がない
- ドキュメントに明記する

## 関数名

- ライブラリとするプログラミング言語側を優先する
