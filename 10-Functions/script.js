'use strict';
/*
const bookings = []

const createBooking = function (flightNum, 
    numPassengers = 1, price = 200 * numPassengers){
        //ES5
        //numPassengers = numPassengers || 1,
        //price = price || 100

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking)
    bookings.push(booking)
}
createBooking('LH123', 5)
createBooking('LH123', 5, 300)


const flight = 'LH234'
const jonas = {
    name: 'Jonas Schedtmann',
    passport: 24739479284,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = ('Mr ' + passenger.name)

    if (passenger.passport === 24739479284) {
        alert('Checked In')
    } else {
        alert('Wrong Passport')
    }
}

//checkIn(flight, jonas)
//console.log(flight)
//console.log(jonas)

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas)
checkIn(flight, jonas)


//HIGHER ORDER FUNCTIONS

//lower level functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

//Higher order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`)
 
  console.log(`Transformed string: ${fn(str)}`)

  console.log(`transformed by: ${fn.name}`)
}

transformer('Javascript is the best language!', oneWord)

transformer('Javascript is the best language!', upperFirstWord)

//My example

const maskCreditCard = function (number) {
    const str = number + ' '
    const last = str.slice(-5)
    return last.padStart(str.length, '*')
}

const transformed = function (str, fn) {
    console.log(`Credit Card number: ${str}`)
    console.log(`Masked Card Number: ${fn(str)}`)
    console.log(`transformed by: ${fn.name}`)
}

transformed(4111567811234786, maskCreditCard)


//Functions Returning Functions

const greet = function (greeting){
    return function (name){
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Clare')

greet('Hello')('Clare')
*/
const greet = greeting => name => 
        console.log(`${greeting} ${name}`)


greet('Hello')('Clare')
