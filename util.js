function generateRandomnumber(){
    return Math.floor(Math.random() * 100) + 1;
}
function celsiustofahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
}

function fahrenheittocelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}
module.exports= {
    generateRandomnumber,
    celsiustofahrenheit,
    fahrenheittocelsius
}