var presentDay = moment().format('dddd');
var currentDay = document.getElementById('currentDay');
var timeBlockList = document.getElementById('Timeblocks');
var amOrpm = (moment().format('LT').split(""));
var currentHour = parseInt(moment().format('LT'));
if (currentHour < 6) {
    currentHour+=12;
}
var hr = 17;
var b=0;
var a = 1;
var hourPeriod;
currentDay.innerHTML = 'Current day: ' + moment().format('dddd');
console.log(presentDay);
console.log(currentHour);
console.log(amOrpm[amOrpm.length - 2]);
function createblock(hour) {
    var timeblock = document.createElement('li');
    if (hour < currentHour) {
    timeblock.setAttribute('class', 'time-block past')
    } else if (hour > currentHour) {
        timeblock.setAttribute('class', 'time-block future')
    } else {
        timeblock.setAttribute('class', 'time-block present')
    }
    if (hour > 12) { hour-= 12}
    timeblock.textContent = hour + ":00 ";    
    timeBlockList.appendChild(timeblock);

}

var Timeblocks = function() {
    for (i = 9;i <=hr;i++) {
        //console.log('a:' + a + " b: " + b + " i: " + i)
        createblock(i)

    }

}
Timeblocks();