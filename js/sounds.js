export default function Sound() {

    const audioForest = new Audio("https://drive.google.com/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA")
    const audioCloud = new Audio("https://drive.google.com/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2")
    const audioCoffeShop = new Audio("https://drive.google.com/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA")
    const audioFireplace = new Audio("https://drive.google.com/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB")
    const inputForestVolume = document.querySelector("#forestVolume")
    const inputCloudVolume = document.querySelector("#cloudVolume")
    const inputCoffeshopVolume = document.querySelector("#coffeshopVolume")
    const inputFireplaceVolume = document.querySelector("#fireplaceVolume")


    function turnOffAudio() {
        audioForest.pause()
        audioCloud.pause()
        audioCoffeShop.pause()
        audioFireplace.pause()
    }

    return {
        audioForest,
        audioCloud,
        audioCoffeShop,
        audioFireplace,
        turnOffAudio,
        inputCloudVolume,
        inputCoffeshopVolume,
        inputFireplaceVolume,
        inputForestVolume,
    }
}