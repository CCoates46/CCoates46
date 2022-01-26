'use strict';
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const countryOne = describeCountry('England', 66, 'London');
console.log(countryOne);
const countryTwo = describeCountry('Finland', 6, 'Helsinki');
console.log(countryTwo);
const countryThree = describeCountry('USA', 140, 'Washington DC');
console.log(countryThree);


//function declaration

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const pop1 = percentageOfWorld1(1441);
const pop2 = percentageOfWorld1(65);
const pop3 = percentageOfWorld1(1898);
console.log(pop1, pop2, pop3);

//function expression

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const pop10 = percentageOfWorld2(1441);
const pop11 = percentageOfWorld2(65);
const pop12 = percentageOfWorld2(1898);
console.log(pop10, pop11, pop12);


const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(65));


const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
}
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
    console.log(description);
}
describePopulation('England', 66);
describePopulation('China', 1441);
describePopulation('Russia', 2500);



function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const populations = [66, 1441, 2500, 3500];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);

const neighbours = ['Serbia', 'Romania', 'Austria', 'Slovakia'];
neighbours.push('Utopia');
//console.log(neighbours);
neighbours.pop();
//console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central European country :D`);
};

neighbours[neighbours.indexOf('Slovakia')] = 'Republic of Slovakia';
console.log(neighbours);


const myCountry = {
    country: 'England',
    capital: 'London',
    population: 66.65,
    neighbours: ['Wales', 'Scotland'],
    describe: function () {
        return
    }
};

console.log(`${myCountry.country} has ${myCountry.population} million english-speaking people with ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = 68.65;
console.log(`${myCountry.country} has ${myCountry.population} million english-speaking people with ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry['population'] = 66.65;
console.log(`${myCountry.country} has ${myCountry.population} million english-speaking people with ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);


const myCountry = {
    country: 'England',
    capital: 'London',
    population: 66.65,
    language: 'english',
    neighbours: ['Scotland', 'Wales'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.checkIsland;
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const populations = [66, 1441, 2500, 3500];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);


const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
//const neighbours[];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let joint = 0; joint < listOfNeighbours[i].length; joint++) {
        console.log(`Neighbour: ${listOfNeighbours[i][joint]}`);
    }
};


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const populations = [66, 1441, 2500, 3500];
const percentages3 = [];

let i = 0;

while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);

    i++;
};
console.log(percentages3);
*/