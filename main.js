const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');
let mapedKeys = [];
let audio = new Audio('./tunes');

//notas
const playTune = (key) => {
    audio.src = `./tunes/${key}.mp3`;
    audio.play();

    //efeito das teclas no teclado
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active')
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

//usar teclado
document.addEventListener('keydown', (e) => {
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    };
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

//volume
volumeSlider.addEventListener('input', handleVolume);

//toggle teclas
keysCheck.addEventListener('click', showHideKeys)