function myFunction() {
  // 選択範囲のセルオブジェクトを取得
  var range = SpreadsheetApp.getActiveRange();
  // 選択範囲のセル全ての値を2次元配列に取得
  var vals = range.getValues();
  var total = 0;
  // タテ列をまわす
  for (objs in vals) {
    // ヨコ列をまわす
    for (obj in vals[objs]) {
      // 縦と横の座標をとる。なんでかける1なんだろう
      total += vals[objs][obj] * 1;
    }
  }
  Browser.msgBox(total);
}


