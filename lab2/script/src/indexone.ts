let clapSound: HTMLAudioElement
let boomSound: HTMLAudioElement

appStart();

function appStart(): void{
    window.addEventListener('keypress',onkeyDown);
    getAudioTags();
}

function getAudioTags(){
    clapSound = document.querySelector('[data-sound="clap"]');
    boomSound = document.querySelector('[data-sound="boom"]');

}
function onkeyDown(ev: KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp;

    playSound(key);
}

function playSound(key: string){
    clapSound.currentTime = 0;
    clapSound.play();
}