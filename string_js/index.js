// let userName="brocode";
// userName.charAt(0) // to get the index at zero we use charAt() method
// .indexOf() method return the first ocurrence of the character 
// .length returns the length of the string 
// .trim() eg username.trim() , will remove the space 
// .repeat() is used to replicate the string 
// .startWith("a") return true or false if the passed value is present or not 
// .replaceAll("replace","replaced with" ); like so 
// .padStart("length of string", "0") , for default value and length 
let name="vijitverma"
let firstname=name.slice(0,5);
//ending index is exclusive
let lastname=name.slice(5,11);
console.log(firstname);
console.log(lastname);
console.log(firstname+" "+lastname)
// alternate method to get the first name
console.log(firstname.slice(firstname.indexOf(" ")+1));
const email="vijitverma@gmail.com"
let userName=email.slice(0,email.indexOf("@"));
console.log(userName)

