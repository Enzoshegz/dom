const hour =document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

function updateClock(){
    let h = new Date().getHours()
    let mins = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let ampmEl = 'AM'

    if(h > 12){
        h = h - 12
        ampmEl = 'PM'
    }

    h = h < 10 ? '0' + h : h
    mins = mins < 10 ? '0' + mins : mins
    sec = sec < 10 ? '0' + sec : sec
    
    hour.innerText = h;
    minutes.innerText = mins;
    seconds.innerText = sec;
    ampm.innerText = ampmEl;

    setTimeout(() =>{
        updateClock()
    }, 1000)
}

updateClock()