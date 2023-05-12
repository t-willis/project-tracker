var dateDisplay = document.querySelector(".date");
var myInterval;
function timerStart() {
  myInterval = setInterval(dayPrintout, 1000);
}
function dayPrintout() {
  day = dayjs();
  var currentDate = day.format("MMM DD, YYYY [at] hh[:]mm[:]ss a");
  dateDisplay.textContent = currentDate;
}
timerStart();
