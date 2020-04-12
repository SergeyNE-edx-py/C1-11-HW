const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const buttons = document.querySelectorAll('button');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const stop_ = document.querySelector('.stop');


let countSec = 0;
let countMin = 0;

const updateText = () =>{	
    minutes.innerHTML = (0 + String(countMin)).slice(-2);
    seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

let timeinterval = null;

const countDown = () => {	
    let total = countSec + countMin * 60;
    timeinterval = setTimeout(countDown, 1000);
    if (total <= 0) {
        clearInterval(timeinterval);
        timer.style.display = 'none';
        message.innerHTML = '<p>I am done...</p>'
    }
    if(countSec > 0) countSec--;
    else{
        countSec = 59;
        countMin--;
    }
    inputSec.value = countSec;
    inputMin.value = countMin;
    updateText();
}

let min_sec_switch = 'sec'

const countdown_minutes = document.querySelector('.countdown-minutes');
countdown_minutes.onclick = () =>{
    min_sec_switch = 'min'
    document.getElementById("minutes").className = "countdown-time-selected"
    document.getElementById("seconds").className = "countdown-time"
    message.innerHTML = '<p>Minutes selected...</p>'
}
const countdown_seconds = document.querySelector('.countdown-seconds');
countdown_seconds.onclick = () =>{
    min_sec_switch = 'sec'
    document.getElementById("minutes").className = "countdown-time"
    document.getElementById("seconds").className = "countdown-time-selected"
    message.innerHTML = '<p>Seconds selected...</p>'
}

plus.onclick = () =>{
    if (min_sec_switch == 'min'){
        if(countMin < 59) {
            ++countMin;
            inputMin.value = countMin;
        }
    }
    else {
        if(countSec < 59) {
            ++countSec;
            inputSec.value = countSec;
        }
        else{
            countSec = 0;
            ++countMin;
            inputSec.value = countSec;
            inputMin.value = countMin;
        }  
    }
    if (timer.style.display == 'none') {
        timer.style.display = '';
        message.innerHTML = '<p>I am reniewed...</p>'
    }
    updateText()
}

minus.onclick = () =>{
    if (min_sec_switch == 'min'){
        if(countMin > 0) {
            --countMin;
            inputMin.value = countMin;
        }    
    }
    else {
        if(countMin <= 0 && countSec===0){
            countSec = 0;
            countMin = 0;
            inputSec.value = countSec;
            inputMin.value = countMin;
            return;
        }
        if(countSec > 0) {
            --countSec;
            inputSec.value = countSec;
        }
        else if(countMin > 0) {
            countSec = 59;
            --countMin;
            inputSec.value = countSec;
        }
    }
    if (timer.style.display == 'none') {
        timer.style.display = '';
        message.innerHTML = '<p>I am reniewed...</p>'
    }
    updateText();
}

start.onclick = () => {
    countDown();  
}

stop_.onclick = () => {
    message.innerHTML = '<p>I am stoped...</p>'
    clearInterval(timeinterval);
}

inputMin = document.querySelector('.input-minutes');
inputMin.value = countMin
inputMin.addEventListener("input", () => {
    countMin = inputMin.value;
    updateText();
});

inputSec = document.querySelector('.input-seconds');
inputSec.value = countSec
inputSec.addEventListener("input", () => {
    countSec = inputSec.value;
    updateText();
});
