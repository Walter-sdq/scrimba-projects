let seconds = 0;
let tens = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.restart');

startBtn.addEventListener('click', () => {
    invervat = setInterval(startTimer, 10)
});
stopBtn.addEventListener('click', () => {
    clearInterval(invervat)
})
resetBtn.addEventListener('click', () => {
    clearInterval(invervat)
    tens = "00"
    seconds = "00"
    getSeconds.innerHTML = seconds
    getTens.innerHTML = tens
})

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;

    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
};