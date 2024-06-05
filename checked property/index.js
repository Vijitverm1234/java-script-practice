let mycheck=document.getElementById("myCheckbox");
let visaBtn=document.getElementById("visaBtn");
let masterBtn=document.getElementById("masterCard");
let paypalBtn=document.getElementById("payPal");
let submit=document.getElementById("mySubmit");
let result=document.getElementById("subResult");
let result2=document.getElementById("payres");
submit.onclick=function(){
    if(mycheck.checked){
        result.textContent=`you are subscribed`
    }
    else{
        result.textContent=`not subscribed`;
    }
    if(visaBtn.checked){
        result2.textContent="visa button clicked Paying with visa";
    }
    else if(masterBtn.checked){
        result2.textContent="you are paying with master button"
    }
    else if(paypalBtn.checked){
        result2.textContent="you are paying with paypal"
    }
    else{
        result2.textContent="just select any payment option "
    }
}