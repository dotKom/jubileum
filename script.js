function pad(n) {
  return ('00' + n).slice(-2);
}

function updateTime() {
  var target = new Date(2016, 10, 12, 18, 00);
  var now = new Date().getTime();
  var diff = new Date(target - now);

  var ms_pr_day = 24*60*60*1000;
  var ms_pr_hour = 60*60*1000;
  var ms_pr_minute = 60*1000;

  var days = Math.floor(diff.getTime()/ms_pr_day);

  diff = diff % ms_pr_day;
  var hours = pad(Math.floor(diff / ms_pr_hour));

  diff = diff % ms_pr_hour;
  var mins = pad(Math.floor(diff / ms_pr_minute));

  diff = diff % ms_pr_minute;
  var seconds = pad(Math.floor(diff / 1000));

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('mins').innerHTML = mins;
  document.getElementById('seconds').innerHTML = seconds;
}

updateTime();
window.setInterval(updateTime, 1000);
