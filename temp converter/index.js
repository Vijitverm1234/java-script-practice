const textbox = document.getElementById("textbox");
const Celsius = document.getElementById("celsius");
const Fahren = document.getElementById("fahren");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textbox.value); // Get the value from the input box
    
    if (Fahren.checked) {
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (Celsius.checked) {
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a unit";
    }
}
