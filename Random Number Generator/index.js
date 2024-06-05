const myBtn=document.getElementById("myButton");
const myLabel1=document.getElementById("Label1");
const myLabel2=document.getElementById("Label2");
const myLabel3=document.getElementById("Label3");

const min=1;
const max=6;
let randomnumber1,randomnumber2,randomnumber3;
myBtn.onclick=function(){
     randomnumber1=Math.floor(Math.random()*(max))-min;
     randomnumber2=Math.floor(Math.random()*(max))-min;
     randomnumber3=Math.floor(Math.random()*(max))-min;
    
    Label1.textContent=randomnumber1;
    Label2.textContent=randomnumber2;
    Label3.textContent=randomnumber3;

}