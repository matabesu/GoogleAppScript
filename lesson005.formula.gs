function myFunction() {
  // 現在のシートを取得
  var sheet = SpreadsheetApp.getActiveSheet();
  // 配列に乱数を格納
  var arr = [[getRnd()],[getRnd()],[getRnd()],[getRnd()],[getRnd()]];
  // 範囲指定 開始行、開始列、行の範囲、列の範囲
  var range = sheet.getRange(2,2,5,1);
  // 取得した範囲に乱数をセット
  range.setValues(arr);
  // 特定のセルのオブジェクトを取得
  var total = sheet.getRange(7,2);
  // そのセルの数式をセット
  total.setFormula("=SUM(B2:B6)");
  total.setNumberFormat("#,###.00");
  // 特定のセルのオブジェクトを取得
  var ave = sheet.getRange(8,2);
  // そのセルの数式をセット
  ave.setFormula("=B7 / 5");
  ave.setNumberFormat("#,###.00");
  // 枠線をセット
  ave.setBorder(true,false,true,false,false,false);
}

function getRnd() {
  return Math.round(Math.random() * 100);
}

