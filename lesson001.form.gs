myFunction() {
  var result = Browser.inputBox("お名前は？", "お名前をどうぞ", Browser.Buttons.OK_CANCEL);
  if (result != "canlel") {
    Browser.msgBox("こんにちは" + result + "さん");
  }
}

