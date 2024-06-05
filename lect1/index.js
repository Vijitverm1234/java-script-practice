
//to get the data type of the variable we can use the typeof function 
// back tick are used to store userr input value 
/*
data types in java script are 
1. Number 
2. strings
3. booleans (true or false )
some of the advance datatype are also present 
=========================
operator symbols that trigger some of the action when applied to aperand 
like 2+2=4
here 2,2 -> operand 
     4->operand 
     + -> operator 
     exponent : **
     arithemetic : ++
     modulus : %
     there are augmented assignment oerator like 
     a=a+2 can be written as a+=2
    icreament and decreament operator as ++ and --
===========================
operator precidence 
let res=1+2*3+4**2;
step1 res=1+2*3+16;
step2 res=1+6+16
step3 res=23
like so just check the precidence
============================
convert one form of datatype to another 

*/

const pi=3.14;
document.getElementById("mySubmit").onclick=function(){
   var radius=document.getElementById("myText").value;
   radius=Number(radius) 
   document.getElementById("textarea").textContent="Area of the given circle "+ pi*radius**2 +" m^2"  ;
}
