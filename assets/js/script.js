// var presentDay = moment().format('dddd')
// var currentDay = document.getElementById('currentDay');
var timeBlockList = document.getElementById('Timeblocks')
var hr = 17;
var b=0;
var a = 1;
// currentDay.innerHTML = 'Current day: ' + moment().format('dddd');
//console.log(presentDay)

function createblock(hour) {

    var timeblock = document.createElement('li');
    timeblock.textContent = hour + ":00";
    timeBlockList.appendChild(timeblock);
}

var Timeblocks = function() {
    for (i = 9;i <=hr;i++) {
        console.log('a:' + a + " b: " + b + " i: " + i)
        b++
        if (b!=5 && a===1){
        createblock(i)
        } else if (a!=6) {
            createblock(a)
            a++
        }

    }

}
Timeblocks();