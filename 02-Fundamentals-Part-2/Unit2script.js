'use strict';

function logger() {
    console.log(`My name is Clare`);
}

//calling, running or invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(`Applejuice: ${appleJuice}`);
const orangeJuice = fruitProcessor(0, 10);
console.log(`Orangejuice: ${orangeJuice}`);


//Function declaration

const age1 = calcAge(1975);

function calcAge(birthYear) {
    return 2021 - birthYear;
}


//console.log(age1);

//Function expression

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1975);
console.log(age1, age2);


// one line arrow code function

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1975);
console.log(age3);


//multiple line arrow function

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(1975, 'Clare'));
console.log(yearsUntilRetirement(1982, 'Richard'));


//Nested functions

const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(4, 3));


const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`);
        return retirement;
    } else {
        console.log(`${firstName} is already retired :D`);
        return retirement;
    };

}

yearsUntilRetirement(1975, 'Clare');
yearsUntilRetirement(1941, 'Bob');


const friends = ['Catherine', 'Amy', 'Louise'];
console.log(friends);

const firstName = 'Clare'
const clare = [firstName, 'Coates', 2021 - 1975, 'QE', friends];
console.log(clare);

//exercise

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

//Adding a new element to the end of an array
const friends = ['Catherine', 'Louise', 'Amy'];
const newLength = friends.push('Sarah');
console.log(friends);
console.log(newLength);

//Adding an element to the front of an array
friends.unshift('John');
console.log(friends);

//Removing an element from the end of an array
friends.pop();
console.log(friends);

//removing an element from the front of an array
const removed = friends.shift();
console.log(friends);
console.log(removed);

//finding the position of an element in an array
console.log(friends.indexOf('Louise'));
console.log(friends);

//finding out if an element exists in an array or not. True or False

console.log(friends.includes('Peter'));
console.log(friends.includes('Amy'));

if (friends.includes('Bob')) {
    console.log('You have a friend called Amy');
} else {
    console.log(`You don't have a friend by that name`);
};


const clare = {
    firstName: 'Clare',
    lastName: 'Coates',
    age: 2021 - 1975,
    job: 'QE',
    friends: ['Catherine', 'Amy', 'Louise']
};

//dot notation
console.log(clare.friends);
//bracket notation
console.log(clare['lastName']);

const nameKey = 'Name';
console.log(clare['first' + nameKey]);
console.log(clare['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Clare? Choose between firstName, lastName, age, job and friends');

if (clare[interestedIn]) {
    console.log(clare[interestedIn]);
} else {
    prompt('Wrong request! Choose between firstName, lastName, age, job, and friends');
};

clare.location = 'England';
clare['Place of birth'] = 'Sunderland';
console.log(clare);


console.log(`${clare.firstName} has ${clare.friends.length} friends, and her best friend is ${clare.friends[0]}.`);


const clare = {
    firstName: 'Clare',
    lastName: 'Coates',
    birthYear: 1975,
    job: 'QE',
    friends: ['Catherine', 'Amy', 'Louise'],
    hasDriversLicence: false,
    //Calling a method without the this keyword
    //calcAge: function (birthYear) {
    // return 2021 - birthYear;

    //calling the mehod with the this keyword
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence.`
    }
};
//console.log(clare.calcAge());

console.log(clare.age);
console.log(clare.age);
console.log(clare.age);
console.log(clare.age);

console.log(clare.getSummary());


for (let rep = 0; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
};


const clare = [
    'Clare',
    'Coates',
    2021 - 1975,
    'Quality Engineer',
    ['Catherine', 'Amy', 'Louise'],
    true
];
//new array
const types = [];

for (let i = 0; i < clare.length; i++) {
    //reading from an array
    console.log(clare[i], typeof clare[i]);
    //filling new array
    //types[i] = typeof clare[i];
    types.push(typeof clare[i]);
};
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


//continue
const clare = [
    'Clare',
    'Coates',
    2021 - 1975,
    'Quality Engineer',
    ['Catherine', 'Amy', 'Louise'],
    true
];
console.log(`*** ONLY STRINGS***`);
for (let i = 0; i < clare.length; i++) {
    if (typeof clare[i] !== 'string') continue;
    console.log(clare[i], typeof clare[i]);
};

//break
console.log(`*** BREAK WITH NUMBER***`);
for (let i = 0; i < clare.length; i++) {
    if (typeof clare[i] === 'number') break;
    console.log(clare[i], typeof clare[i]);
};

const clare = [
    'Clare',
    'Coates',
    2021 - 1975,
    'Quality Engineer',
    ['Catherine', 'Amy', 'Louise'],
];

for (let i = clare.length - 1; i >= 0; i--) {
    console.log(i, clare[i]);
};


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------------Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
};


for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
};


let rep = 1;
while (rep <= 10) {
    console.log(`**WHILE** Lifting weights repetition ${rep}`);
    rep++;
};


let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end.....`);
};
