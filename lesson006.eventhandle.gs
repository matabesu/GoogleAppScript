function myFunction() {
  
}

function onOpen(event) {
  var sheet = event.source.getActiveSheet();
  sheet.getRange("A1").setComment("OPEN : " + event.user);
}

function onEdit(event) {
  var sheet = event.source.getActiveSheet();
  sheet.getRange("B1").setComment("Last modified: " + (new Date()));
}

