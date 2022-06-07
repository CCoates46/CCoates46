'use strict'

const country = 'United Kingdom'
const continent = 'Europe'
let population = 66

console.log(`My country is: ${country} we are part of ${continent}. The population of ${country} is: ${population} million.`)

const isIsland = true
let language = 'english'

console.log(typeof country)
console.log(typeof population)
console.log(typeof isIsland)
console.log(typeof language)

let halfPopulation = population/2
console.log(halfPopulation)
const increasedPopulation = population + 1
console.log(increasedPopulation)

const finlandPopulation = 6

population > finlandPopulation ?
    console.log(`${country} has a bigger population than Finland`): console.log(`Finland has a larger population than ${country}`)

const avgPopulation = 33
halfPopulation = 25
halfPopulation = 66
population = 130
const populationDiff = avgPopulation - population


if (population > avgPopulation) {
    console.log(`${country}'s population is above average`)
} else if (population < avgPopulation) {
    console.log(`${country}'s population is ${populationDiff} million below average`)
} else {
    console.log(`${country} has the same average population as the average country`)
}

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description)

    console.log('9' - '5') // 4;
     console.log('19' - '13' + '17') // 617
     console.log('19' - '13' + 17) //23
     console.log('123' < 57) // false
     console.log(5 + 6 + '4' + 9 - 4 - 2) //1143
/*
let numNeighbours = parseInt(prompt('How many neighbour countries does your country have?'))

if (numNeighbours === 1) {
    alert('Ony 1 border!')
} else if (numNeighbours > 1) {
    alert('More than 1 border')
} else {
    alert('No borders')
}
*/

if (language === 'english' && population < 50 && !isIsland){
    console.log(`You should live in ${country} :-)`)
} else {
    console.log(`${country} does not meet your criteria`)
}

language = 'mandarin'

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers')
        break
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break
    case 'english':
        console.log('3rd place')
        break
    case 'hindi':
        console.log('Number 4')
        break
    case 'arabic':
        console.log('5th most spoken language')
        break
    default:
        console.log('Great language too :D')
}

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)
