export default function Timer({defaultMinutes, defaultSeconds}) {

    let timerTimeOut = 0

    function countdown() {
        timerTimeOut = setTimeout(() => {
            let seconds = Number(defaultSeconds.textContent) - 1
            let minutes = Number(defaultMinutes.textContent)

            if(seconds < 0){
                seconds = 59

               --minutes
            }
            updateDisplay(minutes, seconds)

            if(minutes <= 0 && seconds <= 0) {
                return
            }

            countdown()
        }, 1000)
    }

    function stopStopwatch() {
        clearTimeout(timerTimeOut)
    }

    function updateDisplay(minutes, seconds) {
        defaultSeconds.textContent = String(seconds).padStart(2, "0")
        defaultMinutes.textContent = String(minutes).padStart(2, "0")
    }

    return {
        timerTimeOut,
        countdown,
        stopStopwatch,
        updateDisplay,
    }
}