const display=document.getElementById("display");
let timer=null;
let starttime=0;
let stoptime=0;
let isrunning=false;
function start(){
if(!isrunning){
    starttime=Date.now()-stoptime;
    timer=setInterval(update,10);
    isrunning=true;
}
}
function stop(){
    if (isrunning) {
        clearInterval(timer);
        stoptime = Date.now() - starttime;
        isrunning = false;
    }
}
function reset(){
    clearInterval(timer);
    starttime = 0;
    stoptime = 0;
    isrunning = false;
    display.textContent = "0:0:0:0";s
}
function update(){
    const currtime = Date.now();
    stoptime = currtime - starttime;
    let hours = Math.floor(stoptime / (1000 * 60 * 60));
    let min = Math.floor((stoptime / (1000 * 60)) % 60);
    let sec = Math.floor((stoptime / 1000) % 60);
    let mili = Math.floor(stoptime % 1000 / 10);
    hours=String(hours).padStart(2,"0");
    min=String(min).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    mili=String(mili).padStart(2,"0");
    
    display.textContent = `${hours}:${min}:${sec}:${mili}`;

}