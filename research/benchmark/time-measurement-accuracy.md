# Time measurement accuracy

速度比較に置いて用いる手法について取り上げ，一時停止する関数で1秒間止めた時間を測ることで，どの程度正確に実行時間が計測できるのかを示す．

実行に用いたマイコン : M5Stack Core2

## Mahiwa

(WebAssemblyへのコンパイル元の言語は依存しないので，1言語のみで測定)

## C/C++(Arduino)

999894(μs)

https://github.com/project-mahiwa/benchmark-c/issues/10

## TinyGo

1000005(μs)

https://github.com/project-mahiwa/benchmark-tinygo/issues/11

## MicroPython

1000023(μs)

https://github.com/project-mahiwa/benchmark-micropython/issues/9
