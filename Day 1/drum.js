window.addEventListener('keydown',function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio)return; //Stops if no audio
    audio.currentTime = 0 //Resets time to zero
    audio.play();
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
