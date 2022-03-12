'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements){
  //this empty's the container
  containerMovements.innerHTML = ''
  //this is the loop
  movements.forEach(function(mov,i) {
    //here we need to create a ternary operator to work out type
    const type = mov > 0 ? 'deposit' : 'withdrawal'

   //this is the html we need to insert
    const html = `
    <div class="movements__row">
       <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
       <div class="movements__value">${mov}</div>
  </div> `
   
  //this adds the html to the page
  containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

//calling the function
displayMovements(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//SLICE
let arr = ['a', 'b', 'c', 'd', 'e']
/*
console.log(arr.slice(2))
console.log(arr.slice(2, 4))
console.log(arr.slice(-2))
console.log(arr.slice(-1))

console.log(arr.slice())

//SPLICE

//console.log(arr.splice(2))
console.log(arr)

console.log(arr.splice(-1))
console.log(arr)


let arr2 = ['j', 'i', 'h', 'g', 'f']

console.log(arr2.reverse())
console.log(arr2)

// Concat

const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])

//Join

console.log(letters.join('-'))

//At method

const arr3 = [23, 11, 64]

console.log(arr3[arr3.length -1])
console.log(arr3.slice(-1)[0])

console.log(arr3.at(0))
console.log(arr3.at(-1))

console.log('clare'.at(0))
console.log('clare'.at(-1))


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for of

for (const [i,movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}: You deposited ${movement}`)
  } else {
    console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`)
  }
 }


// for each

console.log('---------- For Each----------------')
movements.forEach(function(transaction, i, arr) {
  if (transaction > 0) {
    console.log(`${i + 1}: You deposited ${transaction}`)
  } else {
    console.log(`${i + 1}:  You withdrew ${Math.abs(transaction)}`)
  }
})


//MAPS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`)
})

const currenciesUnique = new Set (["USD", "GBP", "USD", "EUR", "EUR"])
console.log(currenciesUnique)

currenciesUnique.forEach(function(value, _, map){
  console.log(`${value}: ${value}`)
})

*/

