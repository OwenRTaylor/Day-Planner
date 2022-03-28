var presentDay = moment().format('MMM Do YY');
var currentDay = document.getElementById('currentDay');
var timeBlockList = document.querySelector('ul');

var amOrpm = (moment().format('LT').split(""));
console.log(amOrpm)
amOrpm = amOrpm[amOrpm.length - 2] + amOrpm[amOrpm.length - 1];
console.log(amOrpm);
var currentHour = parseInt(moment().format('LT'));

var container = document.querySelector('ul');
var description = document.createElement('p');
var time;
var buttonEl;
var timeblock;
var inputEl;
var ID;
var locStor;

if (amOrpm == 'PM') {
    currentHour+=12;
}
var hr = 17;
var b=0;
var a = 1;
var hourPeriod;
currentDay.innerHTML = 'Current day: ' + moment().format('dddd') + ", " + presentDay;

var Myfunc = function(event){
    element = event.target;
    ID = element.parentNode.id
    target = element.childNodes;
    num = target.length
    
    element.text = "3";
    if (num === 1) {
        element = target[0];
        console.log(target)
        console.log(element)
        
        
    } else if (num === 2){
        console.log('hi')
        element = target[1];
        text = target[0];
    }
    
    console.log(target);
    if (num === 0) {
        
    }
    element.textContent = localStorage.getItem(ID); 
    element.setAttribute('style', 'display:inline-block;');

    var element = event.target;
    ;
};

var Save = function saveBtn(event) {
    event.preventDefault();
    element = event.target;
    ID = event.path[1].id
    console.log(ID)
    txtarea = document.getElementById(ID + "textarea")
    console.log(txtarea.value);
    localStorage.setItem(ID,"")
    localStorage.setItem(ID,txtarea.value);

}
function createblock(hour) {
    buttonEl = document.createElement('button');
    timeblock = document.createElement('li');
    inputEl = document.createElement('textarea');
    // inputEl.setAttribute('style','display:none');
    
    buttonEl.setAttribute('class','saveBtn col-2');
    time =  document.createElement('p');
    buttonEl.textContent = "Save";
    description = document.createElement('p');
    description.textContent = '';
    description.setAttribute('style','font-size:20px;');
    
    if (hour < currentHour) {
    inputEl.setAttribute('class', 'time-block past col-8')
    } else if (hour > currentHour) {
        inputEl.setAttribute('class', 'time-block future col-8')
    } else if(hour === currentHour) {
        inputEl.setAttribute('class', 'time-block present col-8')
    };
    if (hour > 12) { hour-= 12};
    time.textContent = hour + ":00 ";
    var d = hour;
    if(currentHour > 17 && amOrpm === 'PM') {
        inputEl.setAttribute('class', 'time-block future col-8')
    }
    
    time.setAttribute('id',"time");

    // timeblock.addEventListener('click',function(){
    //     timeblock.textContent = "";
    // })    
    locStor = localStorage.getItem(hour)
    console.log(hour+" :" +locStor)
    // if (locStor = undefined ) {
    //     inputEl.textContent = ''
    // } else {
    //     inputEl.textContent = locStor;
    // }
    inputEl.value = locStor
    timeblock.setAttribute('id',hour);
    timeblock.setAttribute('class','row')
    timeBlockList.appendChild(timeblock);
    timeblock.appendChild(time);
    timeblock.appendChild(inputEl);
    timeblock.appendChild(buttonEl);
    buttonEl.addEventListener('click',Save)
    description.addEventListener('click', Myfunc)
    inputEl.setAttribute('id',hour +"textarea");
    
    
}
function Entertask() {
    timeblock = ID;
    var parent = document.getElementById()
    timeblock.appendChild(inputEl);
}
var Timeblocks = function() {
    for (i = 9;i <=hr;i++) {
        //console.log('a:' + a + " b: " + b + " i: " + i)
        createblock(i)

    }

}
var setTasks = function () {
    
}
Timeblocks();
// container.addEventListener("click", function(event) {
//    // console.log(event)
   
//   buttonEl.removeEventListener('click',arguments.callee)
//    inputEl.setAttribute('style', 'display:block')
//     var element = event.target
//     console.log(event.target)
//     if (event.target != 'button') {
//         console.log('hoap')
//     } else {
//         console.log('12')
//     }
//     console.log(element)
//     element.appendChild(inputEl);
//     // console.log(element.dataset.value);
//     // console.log(element.dataset.state);
//   })
//   $('#1').mouseout(function(){
//       console.log('1002020')
//   })
// buttonEl.addEventListener('dblclick',function(){
//     console.log('HI');
// })
var  txtarea = document.getElementById( "5textarea").value = "asd";


time.setAttribute('style','border:1px; border-color:black');
