let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let resetBtn = document.getElementById("reset-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let tempEl = document.getElementById("temp-el");

function convert() {
    let unit = inputEl.value;
    
    let lengthFeet = (unit * 3.2808).toFixed(3);
    let lengthMeter = (unit * 0.3048).toFixed(3);
    
    lengthEl.textContent = `${unit} meters = ${lengthFeet} feet | ${unit} feet = ${lengthMeter} meters`;
    
    let volumeGallons = (unit * 3.7854).toFixed(3);
    let volumeLiters = (unit * 0.264).toFixed(3);
    
    volumeEl.textContent = `${unit} liters = ${volumeGallons} gallons | ${unit} gallons = ${volumeLiters} liters`;
    
    let massKilos = (unit * 2.205).toFixed(3);
    let massPounds = (unit * 0.453).toFixed(3);
    
    massEl.textContent = `${unit} kilograms ${massPounds} pounds | ${unit} pounds = ${massKilos} kilograms`;
    
    let tempC = ((unit * 1.8) + 32).toFixed(3);
    let tempF = ((unit - 32) / 1.8).toFixed(3);
    
    tempEl.textContent = `${unit} celsius = ${tempF} farenheit | ${unit} farenheit = ${tempC} celsius`;
}

function resetConversion() {
        inputEl.value = 0;
        
        lengthEl.textContent = "0 meters = 0.000 feet | 0 feet = 0.000 meters";
        
        volumeEl.textContent = "0 liters = 0.000 gallons | 0 gallons = 0.000 liters";
        
        massEl.textContent = "0 kilograms = 0.000 pouns | 0 pounds = 0.000 kilograms";
        
        tempEl.textContent = "0 celcius = 32 farenheit | 0 farenheit = -17.778 celsius";
}