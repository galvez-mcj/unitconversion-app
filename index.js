const inputBox = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")

let lengthBox = document.getElementById("length-box")
let volumeBox = document.getElementById("volume-box")
let massBox = document.getElementById("mass-box")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertBtn.addEventListener("click", function() {
    runConverters(inputBox.value)
})

function runConverters(inputValue) {
    lengthConverter(inputValue)
    volumeConverter(inputValue)
    massConverter(inputValue)    
}

function lengthConverter(toConvert) {
    toConvert = Number(toConvert)
    let template = ""
    const factor = 1 / 3.281

    template += `${toConvert} meters = ${ (toConvert / factor).toFixed(3) } feet | 
                       ${toConvert} feet = ${ (toConvert * factor).toFixed(3) } meters`
    
    lengthBox.innerHTML += template
}

function volumeConverter(toConvert) {
    toConvert = Number(toConvert)
    let template = ""
    const factor = 1 / 0.264

    template += `${toConvert} liters = ${ (toConvert / factor).toFixed(3) } gallons | 
                       ${toConvert} gallons = ${ (toConvert * factor).toFixed(3) } liters`
    
    volumeBox.innerHTML += template
}

function massConverter(toConvert) {
    toConvert = Number(toConvert)
    let template = ""
    const factor = 1 / 2.204

    template += `${toConvert} kilograms = ${ (toConvert / factor).toFixed(3) } pounds | 
                       ${toConvert} pounds = ${ (toConvert * factor).toFixed(3) } kilograms`
    
    massBox.innerHTML += template
}


