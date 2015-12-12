function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      sheet.getRange(i,j).setValue(i * j);
    }
  }
  for (var i = 1; i < 10; i++) {
    var rowTotal = 0;
    var colTotal = 0;
    for (var j = 1; j < 10; j++){
      rowTotal += sheet.getRange(i, j).getValue();
      colTotal += sheet.getRange(j, i).getValue();
    }
    sheet.getRange(i, 10).setValue(rowTotal);
    sheet.getRange(10, i).setValue(colTotal);
  }
}

