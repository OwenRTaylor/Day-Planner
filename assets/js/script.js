// getting elements and using moment.js
var timeBlockList = document.querySelector('ul');
var container = document.querySelector('ul');
var presentDay = moment().format('MMM Do YY');
var currentDay = document.getElementById('currentDay');
var amOrpm = moment().format('A')
// (moment().format('LT').split(""));
// amOrpm = amOrpm[amOrpm.length - 2] + amOrpm[amOrpm.length - 1];
console.log(amOrpm + "-------" + moment().format('A'));
var currentHour = parseInt(moment().format('LT'));
// Setting global variables
var element;
var time;
var buttonEl;
var timeblock;
var textareaEl;
var ID;
var locStor;
var hr = 17;
var b=0;
var a = 1;
var hourPeriod;
var  txtarea;
// Adding the date
currentDay.innerHTML = 'Current day: ' + moment().format('dddd') + ", " + presentDay;

// setting current hour to +12
if (amOrpm == 'PM') {
    currentHour+=12;
}
var Myfunc = function(event){
    element = event.target;
    ID = element.parentNode.id;
    element.textContent = localStorage.getItem(ID); 
    element.setAttribute('style', 'display:inline-block;');
    element = event.target;
};
// Function to save data
var Save = function saveBtn(event) {
    event.preventDefault();
    element = event.target;
    ID = event.path[1].id
    txtarea = document.getElementById(ID + "textarea")
    localStorage.setItem(ID,"")
    localStorage.setItem(ID,txtarea.value);
};

//Creating timeblocks
function createblock(hour) {
    //Generating elements
    buttonEl = document.createElement('button');
    timeblock = document.createElement('li');
    textareaEl = document.createElement('textarea');
    buttonEl.setAttribute('class','saveBtn col-2');
    time =  document.createElement('p');
    //Setting attributes
    buttonEl.textContent = "Save";
    if (hour < currentHour) {
    textareaEl.setAttribute('class', 'time-block past col-8')
    } else if (hour > currentHour) {
        textareaEl.setAttribute('class', 'time-block future col-8')
    } else if(hour === currentHour) {
        textareaEl.setAttribute('class', 'time-block present col-8')
    };
    // changing hour to standard format
    if (hour > 12) { hour-= 12};
    time.textContent = hour + ":00 ";
    if(currentHour > 17 && amOrpm === 'PM') {
        textareaEl.setAttribute('class', 'time-block future col-8')
    };
    time.setAttribute('id',"time");
    textareaEl.setAttribute('id',hour +"textarea");
    locStor = localStorage.getItem(hour);
    textareaEl.value = locStor;
    timeblock.setAttribute('id',hour);
    timeblock.setAttribute('class','row');
    //Appending elements
    timeBlockList.appendChild(timeblock);
    timeblock.appendChild(time);
    timeblock.appendChild(textareaEl);
    timeblock.appendChild(buttonEl);
    buttonEl.addEventListener('click',Save);
}
//Iterator for createblocks
var Timeblocks = function() {
    for (i = 9;i <=hr;i++) {
        createblock(i)
    }
}
// Calling timeblocks
Timeblocks();



