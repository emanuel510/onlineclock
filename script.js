function Clock(){
    const now2 = new Date();
    let hours = now2.getHours().toString().padStart(2, 0);
    let minutes = now2.getMinutes().toString().padStart(2, 0);
    let seconds = now2.getSeconds().toString().padStart(2, 0);
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("div2").textContent = time;
}
Clock();
setInterval(Clock, 1000);
