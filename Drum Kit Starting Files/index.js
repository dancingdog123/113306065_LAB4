function playSound(key) {
    let soundFile;
    switch (key) {
        case 'w':
            soundFile = 'sounds/tom-1.mp3';
            break;
        case 'a':
            soundFile = 'sounds/tom-2.mp3';
            break;
        case 's':
            soundFile = 'sounds/tom-3.mp3';
            break;
        case 'd':
            soundFile = 'sounds/tom-4.mp3';
            break;
        case 'j':
            soundFile = 'sounds/snare.mp3';
            break;
        case 'k':
            soundFile = 'sounds/crash.mp3';
            break;
        case 'l':
            soundFile = 'sounds/kick-bass.mp3';
            break;
        default:
            return; 
    }
    const audio = new Audio(soundFile);
    audio.play();
}
function animateButton(key) {
    const button = document.querySelector(`.${key}`);
    if (button) {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100);
    }
}
const drumButtons = document.querySelectorAll('.drum');
drumButtons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonKey = this.innerHTML;
        playSound(buttonKey);
        animateButton(buttonKey);
    });
});
document.addEventListener('keydown', function (event) {
    playSound(event.key);
    animateButton(event.key);
});
