function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    hours=hours%12|| 12;
     hours=hours.toString().padStart(2,0)
    const min=now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${min}:${sec}`
    document.getElementById("clock").textContent=timestring;
}
updateClock();
setInterval(updateClock,1000);
// here setinterval function will call the function like settimout do 
