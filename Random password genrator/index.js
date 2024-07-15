function generatePass(length, lowerCase, upperCase, number, Symbol) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*";
    let allowedString = "";
    let pass = "";

    // Add conditions
    allowedString += lowerCase ? lower : "";
    allowedString += upperCase ? upper : "";
    allowedString += number ? numbers : "";
    allowedString += Symbol ? symbols : "";

    if (length <= 0) {
        return "(password length should be one)";
    }
    if (allowedString.length === 0) {
        return "(select any option)";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedString.length);
        pass += allowedString[randomIndex];
    }

    return pass;
}

document.addEventListener("DOMContentLoaded", function() {
    const passLength = 12;
    const submit = document.getElementById("submit");
    const text = document.getElementById("text");

    submit.onclick = function() {
        const lowerCase = document.getElementById("lower").checked;
        const upperCase = document.getElementById("upper").checked;
        const number = document.getElementById("number").checked;
        const symbol = document.getElementById("symbol").checked;

        const pass = generatePass(passLength, lowerCase, upperCase, number, symbol);
        text.textContent = pass;
    };

    // Generate an initial password for testing
    const lowerCase = document.getElementById("lower").checked;
    const upperCase = document.getElementById("upper").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    const initialPass = generatePass(passLength, lowerCase, upperCase, number, symbol);
    console.log(initialPass);
});
