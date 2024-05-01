//DOM Elements

const playButton = document.getElementById('btn-play');
const pauseButton = document.getElementById('btn-pause');
const resetButton = document.getElementById('btn-reset');
const timer = document.querySelector('.timer');

function timeToString(time){
    let differenceInHours = time / 3600000;
    let hr = Math.floor(differenceInHours);
    let differenceInMinutes = (differenceInHours - hr)*60;
    let min = Math.floor(differenceInMinutes);

    let differenceInSeconds = (differenceInMinutes - min)*60;
    let sec = Math.floor(differenceInSeconds);

    let differenceInMilliseconds = (differenceInSeconds - sec)*100;
    let ms = Math.floor(differenceInMilliseconds);

    let formattedmin = min.toString().padStart(2, '0');
    let formattedsec = sec.toString().padStart(2, '0');
    let formattedms = ms.toString().padStart(2, '0');

    return `${formattedmin}:${formattedsec}:${formattedms}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;

function displayInTimer(str){
    timer.innerHTML = str;
}

function play(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime;
        displayInTimer(timeToString(elapsedTime));
    },10);
    toggleButtons("PAUSE");
}

function pause(){
    clearInterval(timerInterval);
    toggleButtons("PLAY");
}

function reset(){
    clearInterval(timerInterval);
    displayInTimer('00:00:00');
    elapsedTime = 0;
    toggleButtons("PLAY");
}
function toggleButtons(Key) {
    if(Key === 'PLAY'){
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    } else {
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    }
}

playButton.addEventListener('click', play);
pauseButton.addEventListener('click',pause);
resetButton.addEventListener('click', reset);