const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
function setDate() {
    console.log("Hi!");

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90 //add 90 to offset by 90 degrees
    secondHand.style.transform = `rotate(${secondsDeg}deg)`

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90 //add 90 to offset by 90 degrees
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`

    const hours = now.getHours();
    const hourDeg = ((hours / 12) * 360) + 90 //add 90 to offset by 90 degrees
    hourHand.style.transform = `rotate(${hourDeg}deg)`


}
setInterval(setDate,1000);
