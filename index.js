/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let lengthResultEl = document.getElementById("length-result-el")
let volumeResultEl = document.getElementById("volume-result-el")
let massResultEl = document.getElementById("mass-result-el")
const convertBtn = document.getElementById("convert-btn")
const feet = 3.281
const gallon = 0.264
const pound = 2.204

convertBtn.addEventListener("click", function() {
    let lengthText = ""
    let volumeText = ""
    let massText = ""

    lengthText += `
        ${inputEl.value} meter = ${convertLengthToFeet(inputEl.value).toFixed(2)} feet | 
        ${inputEl.value} feet = ${convertLengthToMeter(inputEl.value).toFixed(2)} meters
    `
    lengthResultEl.innerHTML = lengthText

    volumeText += `
        ${inputEl.value} liters = ${convertVolumeToGallon(inputEl.value).toFixed(2)} gallons | 
        ${inputEl.value} gallons = ${convertVolumeToLiter(inputEl.value).toFixed(2)} liters
    `
    volumeResultEl.innerHTML = volumeText

    massText += `
        ${inputEl.value} kilos = ${convertMassToPounds(inputEl.value).toFixed(2)} pounds | 
        ${inputEl.value} pounds = ${convertMassToKilos(inputEl.value).toFixed(2)} kilos
    `
    massResultEl.innerHTML = massText

})

//Length to Feet and vice versa
function convertLengthToFeet(element){
    return element *= feet 
}
function convertLengthToMeter(element){
    return element /=  feet
}

//Liters to Gallon and Vice Versa
function convertVolumeToGallon(element){
    return element *= gallon
}
function convertVolumeToLiter(element){
    return element /= gallon
}

//Kilo to Pounds and Vice Versa
function convertMassToPounds(element){
    return element *= pound
}

function convertMassToKilos(element){
    return element /= pound
}