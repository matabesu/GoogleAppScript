function onOpen(e) {
  // メニューと関数の用意
  var arr = [
    {name: "現在日時の表示", functionName:"setNow"},
    {name: "合計表示の設定", functionName:"setRangTotal"}
    ];
  // 現在のシートを取得
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // メニューを追加
  spreadsheet.addMenu("追加機能", arr);
}

// 選択しているセルに現在日時をセットする関数
function setNow() {
  var range = SpreadsheetApp.getActiveRange();
  range.setValue(new Date());
}

function setRangTotal() {
  var range = SpreadsheetApp.getActiveRange();
  var sheet = SpreadsheetApp.getActiveSheet();
  var r = range.getNumRows();
  var c = range.getNumColumns();
  var x = range.getRow();
  var y = range.getColumn();
  
  for (var i = x; i < (x + r); i++) {
    sheet.getRange(i, y + c).setFormulaR1C1('=SUM(R' + i + 'C' + y + ':R' + i + 'C' + (y+c-1) + ')');
  }
  for (var i = y; i < (y + c); i++) {
    sheet.getRange(x, r + i).setFormulaR1C1('=SUM(R' + x + 'C' + i + ':R' + (x + r - 1) + 'C' + i + ')');
  }

}

