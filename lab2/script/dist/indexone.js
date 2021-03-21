let clapSound;
let boomSound;
appStart();
function appStart() {
    window.addEventListener('keypress', onkeyDown);
    getAudioTags();
}
function getAudioTags() {
    clapSound = document.querySelector('[data-sound="clap"]');
    boomSound = document.querySelector('[data-sound="boom"]');
}
function onkeyDown(ev) {
    const key = ev.key;
    const time = ev.timeStamp;
    playSound(key);
}
function playSound(key) {
    clapSound.currentTime = 0;
    clapSound.play();
}
