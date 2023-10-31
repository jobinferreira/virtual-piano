const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");


let mapedKeys = [];

let audio = new Audio();

const playTune = (element) => {
    audio.src = `src/tunes/${element}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${element}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => { 
        clickedKey.classList.remove("active")
    }, 150)
}

pianoKeys.forEach((element) => {
    element.addEventListener("click", () => playTune(element.dataset.key));
    mapedKeys.push(element.dataset.key)
})

document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
    playTune(e.key)
}
})

const handleVolume = (e) => {
    audio.volume = e.target.value
    console.log(e.target.value)
}

volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
    pianoKeys.forEach(key => 
        key.classList.toggle("hide")
    )
}

keysCheck.addEventListener("click", showHideKeys)