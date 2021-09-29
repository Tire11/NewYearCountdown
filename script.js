const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');



const presentYear = new Date().getFullYear();

const nextYearTime = new Date(`January 01 ${presentYear + 1} 00:00:00`);

    //Input Background Year
year.innerText = presentYear + 1;
// console.log(year);

    //Update CLock
function updateClock(){
    const presentTime = new Date();
    const compare = nextYearTime - presentTime;

    const dys = Math.floor(compare / 1000 / 60 / 60 / 24);
    const hrs = Math.floor(compare / 1000 / 60 / 60) % 24;
    const min = Math.floor(compare / 1000 / 60) % 60;
    const sec = Math.floor(compare / 1000) % 60;

    //Input Into DOM
    days.innerHTML = dys;
    hours.innerHTML = hrs < 10 ? '0' + hrs : hrs;
    minutes.innerHTML = min < 10 ? '0' + min : min;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;
}

    //spinner Display
    setTimeout(() => {
        loading.remove();
    }, 1000);

    //Count Every Second/Millisecond
    setInterval(updateClock, 1000);