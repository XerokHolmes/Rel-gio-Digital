function updateClock() {
    const date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); 
