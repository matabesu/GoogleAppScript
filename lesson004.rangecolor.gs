function myFunction() {
  // 選択範囲のセルオブジェクトを取得
  var range = SpreadsheetApp.getActiveRange();
  // 縦行の数値を取得
  var r = range.getNumRows();
  // 横列の数値を取得
  var c = range.getNumColumns();
  // リストを生成
  // フォントの色リスト
  var arr = new Array(r);
  // セルの色リスト
  var arr2 = new Array(r);
  
  // 行分まわす
  for (var i = 0; i < r; i++) {
    // 行ごとに列分のリストを生成する
    arr[i] = new Array(c);
    arr2[i] = new Array(c);
  }
  Logger.log(arr);
  
  var total = 0;
  // 行分ループ
  for (var i = 0; i < r; i++) {
    // 列分ループ
    for (var j = 0;j < c; j++) {
      // 偶数なら
      if ((i + j) % 2 == 0) {
        arr[i][j] = "#FF0000";
        arr2[i][j] = "#FFCCCC";
      } else {
        arr[i][j] = "#0000FF";
        arr2[i][j] = "#CCCCFF";
      }
    }
  }
  range.setFontColors(arr);
  range.setBackgroundColors(arr2);
}

