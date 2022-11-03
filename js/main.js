import Sound from "./sounds.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector("#controls button:nth-child(1)")
const buttonStop = document.querySelector("#controls button:nth-child(2)")
const buttonMore = document.querySelector("#controls button:nth-child(3)")
const buttonLess = document.querySelector("#controls button:nth-child(4)")
const defaultMinutes = document.querySelector("#minutes")   
const defaultSeconds = document.querySelector("#seconds")
const buttonForest = document.querySelector("#sons button:nth-child(1)")
const buttonCloud = document.querySelector("#sons button:nth-child(2)")
const buttonCoffeShop = document.querySelector("#sons button:nth-child(3)")
const buttonFireplace = document.querySelector("#sons button:nth-child(4)")

const sound = Sound()
const isPlaying = (audio) => {
    return !audio.paused;
}

const timer = Timer({
    defaultMinutes,
    defaultSeconds
})

buttonMore.addEventListener("click", () => {
    let newMinutes = Number(defaultMinutes.textContent) + 5
    timer.updateDisplay(newMinutes, 0)
})

buttonLess.addEventListener("click", () => {
    let newMinutes = Number(defaultMinutes.textContent) - 5

    if(newMinutes < 0) {
        newMinutes = 0
    }
    timer.updateDisplay(newMinutes, 0)
})

buttonPlay.addEventListener("click", () => {
    timer.countdown()
})

buttonStop.addEventListener("click", () => {
    timer.stopStopwatch()
    sound.turnOffAudio()
})

buttonForest.addEventListener("click", () => {
    if (!isPlaying(sound.audioForest)) {
        sound.audioForest.loop = true  
        sound.audioForest.play()
    } else {
        sound.audioForest.pause()
    } 
})

buttonCloud.addEventListener("click", () => {
    if (!isPlaying(sound.audioCloud)) {
        sound.audioCloud.loop = true
        sound.audioCloud.play()
    }else {
        sound.audioCloud.pause()
    }
})

buttonCoffeShop.addEventListener("click", () => {
    if (!isPlaying(sound.audioCoffeShop)) {
        sound.audioCoffeShop.loop = true
        sound.audioCoffeShop.play()
    } else {
        sound.audioCoffeShop.pause()
    }
})

buttonFireplace.addEventListener("click", () => {
    if (!isPlaying(sound.audioFireplace)) {
        sound.audioFireplace.loop = true
        sound.audioFireplace.play()
    } else {
        sound.audioFireplace.pause()
    }
})


//Dark mode

const buttonModeLight = document.querySelector("#screenMode .sun")
const buttonModeDark = document.querySelector("#screenMode .moon")
const screen = document.querySelector("html")

buttonModeLight.addEventListener("click", () => {
    buttonModeLight.classList.add("hide")
    buttonModeDark.classList.remove("hide")

    screen.classList.add("dark-mode")
})

buttonModeDark.addEventListener("click", () => {
    buttonModeLight.classList.remove("hide")
    buttonModeDark.classList.add("hide")

    screen.classList.remove("dark-mode")
})

// Controle de volume

sound.inputForestVolume.addEventListener("change", () =>{
    sound.audioForest.volume = sound.inputForestVolume.value / 100
    buttonForest.disabled = true
})

sound.inputForestVolume.addEventListener("mouseleave", () => {
    buttonForest.disabled = false
})

sound.inputCloudVolume.addEventListener("change", () =>{
    sound.audioCloud.volume = sound.inputCloudVolume.value / 100
    buttonCloud.disabled = true
})

sound.inputCloudVolume.addEventListener("mouseleave", () => {
    buttonCloud.disabled = false
})

sound.inputCoffeshopVolume.addEventListener("change", () =>{
    sound.audioCoffeShop.volume = sound.inputCoffeshopVolume.value / 100
    buttonCoffeShop.disabled = true
})

sound.inputCoffeshopVolume.addEventListener("mouseleave", () => {
    buttonCoffeShop.disabled = false
})

sound.inputFireplaceVolume.addEventListener("change", () =>{
    sound.audioFireplace.volume = sound.inputFireplaceVolume.value / 100
    buttonFireplace.disabled = true
})

sound.inputFireplaceVolume.addEventListener("mouseleave", () => {
    buttonFireplace.disabled = false
})