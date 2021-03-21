let clapSound;
let boomSound;
const channel1 = [];
appStart();
function appStart() {
    window.addEventListener('keypress', onKeyDown);
    const btnPlayChannel1 = document.querySelector('#playChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    getAudioTags();
}
function onPlayChannel1() {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time);
    });
}
function getAudioTags() {
    clapSound = document.querySelector('[data-sound="clap"]');
    boomSound = document.querySelector('[data-sound="boom"]');
}
function onKeyDown(ev) {
    const key = ev.key;
    const time = ev.timeStamp;
    channel1.push({ key, time });
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case 'a':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'b':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
    }
}
