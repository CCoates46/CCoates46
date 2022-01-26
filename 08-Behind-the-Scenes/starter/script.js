'use strict';
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;
   
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >=1981 && birthYear <=1996) {
            const firstName = 'Steven';
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }
        console.log(millenial);
    }

    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
//printAge();


console.log(me);
console.log(job);
console.log(year);


var me = 'Clare';
let job = 'Quality Engineer';
const year = 1975;



console.log(addDecl(2,3));
console.log(addExpr(2,3));
console.log(addArrow(2,3));


//function declaration

function addDecl (a,b) {
    return a + b;
};

//function expression
const addExpr = function(a,b) {
    return a + b;
}

//arrow functions

const addArrow = (a,b) => a+b;

var x = 1;
let y = 2;
const z = 3;


console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1980);


const jonas = {
    year:1991,
    calcAge: function () {

    console.log(this);
    console.log(2037 - this.year);
    },
};

const matilda = {
    year:2017,

};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
jonas.calcAge();



jonas.calcAge();


const jonas = {
    firstName: 'Jonas',
    year:1991,
    calcAge: function () {

    console.log(this);
    console.log(2037 - this.year);
    },

    greet: () => console.log(`Hey ${this.firstName}`)
};
jonas.greet();
console.log(this);


const addExpr  = function (a,b) {
    console.log(arguments);
    
    return a + b;
}
//addExpr(2,5);
addExpr(2,5,8,12);



let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log('friend:' , friend);
console.log('me' , me);


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';

console.log(oldLastName);
console.log(lastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davies';

console.log('Before marriage' , jessica);
console.log('After Marriage:' , marriedJessica);
*/

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const jessicaCopy = Object.assign({}, jessica2);
jessica2.lastName = 'Davies'
console.log('Before Marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
