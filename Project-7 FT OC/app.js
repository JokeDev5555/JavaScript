function toCelsius(fahrenheit) {

    let value = (fahrenheit - 32) * 5 / 9
    return  value.toFixed(2) + " °C "
}

function display ( elementId, value) {
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}

function toFahrenheit(celsius) {

    let value = (celsius * 9) / 5 + 32
    return value.toFixed(2) + " °F "
}


alert(toCelsius(100))
display("answar_section", toCelsius(100))

alert(toFahrenheit(37))
display("answar_section_celsius", toFahrenheit(37))