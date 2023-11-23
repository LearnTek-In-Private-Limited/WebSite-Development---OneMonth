
const secondshand=document.getElementById('seconds-hand');
const hourhand=document.getElementById('hour-hand');
const minuteshand=document.getElementById('minutes-hand');


function clockTick(){
    const date = new Date();
    const seconds =date.getSeconds() / 60;
    const minutes =(seconds + date.getMinutes())/60;
    const hours =(minutes + date.getHours())/12;


    rotateClockHand(secondshand,seconds);
    rotateClockHand(minuteshand,minutes);
    rotateClockHand(hourhand,hours);


}

function rotateClockHand(element,rotation){

    element.style.setProperty('--rotate',rotation*360);
}
setInterval(clockTick,1000);