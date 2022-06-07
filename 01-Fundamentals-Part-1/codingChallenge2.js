'use strict'

let markMass = 95
let markHeight = 1.88

let johnMass = 75
let johnHeight = 1.89


function bmiCalculation2 (mass, height) {
    return mass / (height * height)
}

const markResult = console.log(`Marks BMI is: ${bmiCalculation2(markMass, markHeight)}`)
const johnResult = console.log(`Johns BMI is: ${bmiCalculation2(johnMass, johnHeight)}`)

const markHeigherBMI = markResult > johnResult ? true : false
console.log(markHeigherBMI)