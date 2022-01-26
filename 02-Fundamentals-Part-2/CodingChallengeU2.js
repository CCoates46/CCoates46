'use strict';
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgDolphins1 = calcAverage(105, 115, 171);
const avgKoalas1 = calcAverage(65, 54, 49);
console.log(avgDolphins1, avgKoalas1);

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins1} vs ${avgKoalas1})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koala's win ${avgKoalas1} vs ${avgDolphins1}`);
    } else {
        console.log(`No Team Wins`);
    }
}

checkWinner(avgDolphins1, avgKoalas1);


//My answer
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        const tips = bill * 0.15;
        const total = bill + tips;
        console.log(`The amount of the bill is ${bill}, and the tip is ${tips}. The total value of bill is ${total}`);
        return total;
    } else {
        const tips = bill * 0.20;
        const total = bill + tips;
        console.log(`The amount of the bill is ${bill}, and the tip is ${tips}. The total value of bill is ${total}`);
        return total;
    }
}
const bills = [125, 555, 144];

//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
//console.log(tips);
const total = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(total);


//Jonas answer

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 144];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(mark.calcBMI());
console.log(mark);


const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(john.calcBMI());
console.log(john);

john.bmi > mark.bmi ? console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`) :
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`);


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);

}
console.log(totals);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));
*/




