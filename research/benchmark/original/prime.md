# Prime

素数判定

## 条件

| 対象                   | 内容           |
| ---------------------- | -------------- |
| 使用したマイコン       | M5 Stack Core2 |
| mahiwa-backend version | v0.2.1         |
| PlatformIO version     | v6.1.11        |

## 結果

## 関連Issues

- https://github.com/project-mahiwa/document/issues/46#issuecomment-1864612213

## 備考

- Arduinoのsqrtの返り値がf64なので，GoやRustでも同様にf64の精度でsqrtを計算するようにする(意図的に型キャストしている)
- 最適化オプションはサイズ優先(Arduinoデフォルト)にする
  - PlatformIO(framework=arduino)のビルドはデフォルトがs
  - インタプリタ型のMicroPyhonは指定なし
  - TinyGoはデフォルトがzだがコマンドライン引数でsを指定
  - Rustのリリースビルドはデフォルトが1だがsにする
