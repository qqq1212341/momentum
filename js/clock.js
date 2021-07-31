const clock = document.getElementById("clock");
const date = new Date();
// clock.innerText = "adas";

function getClock(){
    const date = new Date();
    let Seconds = date.getSeconds();
    clock.innerText = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}
getClock()
setInterval(getClock, 1000);