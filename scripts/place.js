document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

function calculateWindChill(temp, wind){
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}
const temperature = 28;
const windSpeed = 10;
 if(temperature <=10 && windSpeed > 4.8){
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("calculateWindShill").textContent =windChill.toFixed(1) + "°C"
 }
 else{
    document.getElementById("calculateWindShill").textContent = "N/A"
 }