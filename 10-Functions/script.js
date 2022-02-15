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

const greet = greeting => name => 
        console.log(`${greeting} ${name}`)


greet('Hello')('Clare')


//The Call and Apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} has booked a seat on ${this.airline} ${this.iataCode}${flightNum}`)
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    }
}

lufthansa.book(235, 'Clare Coates')
lufthansa.book(635, 'John Smith')
console.log(lufthansa)

const euroWings = {
    airline: 'EuroWings',
    iataCode: 'EW',
    bookings: []
}

const book = lufthansa.book

//This does NOT work
//book(23, 'Sarah Williams')

//CALL Method
book.call(euroWings, 23, 'Sarah Williams')
console.log(euroWings)

book.call(lufthansa, 239, 'Mary Cooper')
//console.log(lufthansa)

//APPLY method

const flightData = [583, 'George Cooper']
//book.apply(euroWings, flightData)
//console.log(euroWings)

book.call(euroWings, ...flightData)
console.log(euroWings)

//BIND method

const bookEW = book.bind(euroWings)
bookEW(23, 'Steven Williams')
console.log(euroWings)

const bookEW23 = book.bind(euroWings, 23)
bookEW23('Clare Coates')
bookEW23('Richard Coates')

//Add event Listeners

lufthansa.planes = 300
lufthansa.buyPlane = function () {
    console.log(this)

    this.planes++
    console.log(this.planes)
}

//lufthansa.buyPlane()

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//Partial Application

//const addTax = (rate, value) => value + value * rate
//console.log(addTax(0.1, 200))

//const addVAT = addTax.bind(null, 0.23)
//console.log(addVAT (100))

const newTax = (rate) => (value) =>
      value + value * rate

const returnTax = newTax(0.23)
console.log(returnTax(100))
console.log(returnTax(23))
*/