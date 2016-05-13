function pad(n) {
  return ('00' + n).slice(-2);
}

function dec2bin(dec){
    return (dec >>> 0).toString(16);
}

function timer() {
    window.setInterval(function () {
            var target = Date.UTC(2016, 10, 12, 18, 0);
            var now = new Date().getTime();
            var diff = new Date(target - now);

            var ms_pr_day = 24*60*60*1000;
            var ms_pr_hour = 60*60*1000;
            var ms_pr_minute = 60*1000;

            var days = pad(Math.floor(diff.getTime()/ms_pr_day), 2);

            diff = diff % ms_pr_day;
            var hours = pad(Math.floor(diff / ms_pr_hour), 2);

            diff = diff % ms_pr_hour;
            var mins = pad(Math.floor(diff / ms_pr_minute), 2);

            diff = diff % ms_pr_minute;
            var seconds = pad(Math.floor(diff / 1000), 2);


            // var countdown = days + ":" + hours + ":" + mins + ":" + seconds;

            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('mins').innerHTML = mins;
            document.getElementById('seconds').innerHTML = seconds;


        },
        1000
    )
    ;

}

document.onload = timer();