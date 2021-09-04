var akanMaleName = ["Kwasi!", "Kwadwo!", "Kwabena!", "Kwaku!", "Yaw!", "Kofi!", "Kwame!"]
var akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function checkDayOfMonth() {
  var century = parseInt(document.getElementById("century").value);
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var dayOfMonth = parseInt(document.getElementById("monthday").value);
  var gender = document.getElementById("gender").value;
  var CC = century;
  var YY = year;
  var MM = month;
  var DD = dayOfMonth;
  var d = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
  if (CC < 12 || CC > 22) {
    alert("Enter a valid Centuary")
  } else {
    
