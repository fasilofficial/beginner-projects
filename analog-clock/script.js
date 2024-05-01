function getAngle(){
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let hrHandRotation = 30*hours + minutes/2 + seconds/120;
    let minHandRotation = 6*minutes + seconds/10;
    let secHandRotation = 6*seconds;
    hourHand.style.transform = `translateX(-50%) rotate(${hrHandRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minHandRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secHandRotation}deg)`;
}
getAngle();
setInterval(getAngle, 1000);