// calling one mthod after another in one continuous line of code
// no method chaining 
let username=window.prompt("Enter your name")
username=username.trim();
let letter=username.charAt(0);
letter=letter.toUpperCase();
let extra=username.slice(1);
extra=extra.toLowerCase()
username=letter+extra;
console.log(username)

//-------with method calling------
username=username.trim().charAt(0).toUpperCase()+username.slice(1).toLowerCase();