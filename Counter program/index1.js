const dec=document.getElementById("decreaseBT")
const inc=document.getElementById("increaseBT")
const res=document.getElementById("resetBt")
const countLabel=document.getElementById("countlabel");
let count=0;
inc.onclick=function(){
    count++;
    countLabel.textContent=count;
}
dec.onclick=function(){
    count--;
    countLabel.textContent=count;
}
res.onclick=function(){
    count=0;
    countLabel.textContent=0;
}


