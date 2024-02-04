// DOM elements selectors
const controlBtn = document.querySelector('.control-button');
const pauseBtn = document.querySelector('.pause');
const timer = document.querySelector('.timer');
const options = document.querySelector('.options');
const workOption = document.querySelector('.work');
const breakOption = document.querySelector('.break');

// Define constants for work, break times and ring tone
const WORK_TIME = 25;
const BREAK_TIME = 5;
const ring = new Audio('src/ring-sound.wav');

// Variables initializations for minutes, seconds and IntervalID
let minutes = WORK_TIME;
let seconds = 0;
let intervalId;

// Function to update the timer in the DOM
function setTimer() {
    const secondsStr = seconds.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');
    timer.textContent = `${minutesStr}:${secondsStr}`;
}

// Function to activate the break mode
function breakMode() {
    breakOption.classList.add('active');
    workOption.classList.remove('active');
    minutes = BREAK_TIME;
    seconds = 0;
    reset();
}

// Function to activate the work mode
function workMode() {
    workOption.classList.add('active');
    breakOption.classList.remove('active');
    minutes = WORK_TIME;
    seconds = 0;
    reset();
}

// Function to reset the classes of the control button
function reset() {
    controlBtn.classList.remove('pause');
    controlBtn.classList.add('play');
    clearInterval(intervalId);
}

// Function to switch between modes
function switchMode(mode) {
    if (mode === 'break') {
        breakMode();
    } else if (mode === 'work') {
        workMode();
    }
    setTimer();
}

// Function to switch options between play and pause
function switchOption() {
    if (controlBtn.classList.contains('play')) {
        controlBtn.classList.remove('play');
        controlBtn.classList.add('pause');
        play();
    } else if (controlBtn.classList.contains('pause')) {
        controlBtn.classList.remove('pause');
        controlBtn.classList.add('play');
        pause();
    }
}

// Function to handle the mode 
function handleMode(event) {
    const { mode } = event.target.dataset;
    if (!mode) return;
    switchMode(mode);
}

function playTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(intervalId);
            ring.play();
            reset();
        } else {
            minutes -= 1;
            seconds = 59;
        }
    } else {
        seconds -= 1;
    }
    setTimer();
}

function play() {
    intervalId = setInterval(playTimer, 1000);
}

function pause() {
    clearInterval(intervalId);
}

options.addEventListener('click', handleMode);
controlBtn.addEventListener('click', switchOption);
