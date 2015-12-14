function myFunction() {
  
}

function onMyEdit(e) {
  var sr = e.range.rowStart;
  var sc = e.range.columnStart;
  var er = e.range.rowEnd;
  var ec = e.range.columnEnd;
  var msg = "EDIT: " + sr + "," + sc + ":" + er + "," + ec;
  
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange("A1").setValue(msg);
}


