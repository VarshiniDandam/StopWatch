let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    displayTime(elapsedTime);
}

function displayTime(time) {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    const formattedTime = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;

    document.getElementById('display').textContent = formattedTime;
}

function pauseStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime(elapsedTime);
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    const currentTime = Date.now();
    const lapTime = currentTime - startTime;

    const li = document.createElement('li');
    li.textContent = formatTime(lapTime);
    document.getElementById('laps').appendChild(li);
}

function formatTime(time) {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}
