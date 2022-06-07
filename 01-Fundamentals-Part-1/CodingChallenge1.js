/*
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}

//const markHigherBMI = (markBmi > johnBmi);
//console.log(markHigherBMI);


markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBmi = markMass / markHeight ** 2;
johnBmi = johnMass / johnHeight ** 2;

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}


console.log(markBmi, johnBmi);

const markHigherBMI2 = (markBmi > johnBmi);
console.log(markHigherBMI2);
*/
/*
const avgScoreDolphins = (96 + 108 + 89) / 3;
const avgScoreKoalas = (88 + 91 + 110) / 3;
console.log(avgScoreDolphins, avgScoreKoalas);

/*
if (avgScoreDolphins > avgScoreKoalas) {
    console.log("Dolphin's Won!");
} else if (avgScoreDolphins < avgScoreKoalas) {
    console.log("Koalas Won!")
} else if (avgScoreDolphins === avgScoreKoalas) {
    console.log("It was a draw!");
}
*/
//Bonus 1
/*
const dolphinScoresRound1 = 97;
const dolphinScoresRound2 = 112;
const dolphinScoresRound3 = 101;

const koalasScoresRound1 = 109;
const koalasScoresRound2 = 95;
const koalasScoresRound3 = 106;

//Round1
const roundOneResultA = (dolphinScoresRound1 > koalasScoresRound1);
//console.log(`Round One A winner: ${roundOneResultA}`);
const roundOneResultB = (koalasScoresRound1 > dolphinScoresRound1);
//console.log(`Round One B Winner: ${roundOneResultB}`
const roundOneResultC = (dolphinScoresRound1 === koalasScoresRound1);
//console.log(`Round One is a Draw!`);
const roundOneMinScoreA = (dolphinScoresRound1 >= 100);
//console.log(`Round One Score A: ${roundOneMinScoreA}`);
const roundOneMinScoreB = (koalasScoresRound1 >= 100);
//console.log(`Round One Score B: ${roundOneMinScoreB}`);

if (roundOneResultA && roundOneMinScoreA) {
    console.log('Round One winner is: Dolphins won this round and have a score over 100');
} else if (roundOneResultB && roundOneMinScoreA) {
    console.log("Round One winner is: Koala's won this round but don't have a score over 100");
} else if (roundOneResultC && roundOneMinScoreA && roundOneMinScoreB) {
    console.log("Round One is a Draw!");
} else if (roundOneResultA && !roundOneMinScoreB) {
    console.log("Round One Winner is: Dolphins won this round but don't have a score over 100");
} else if (roundOneResultB && roundOneMinScoreB) {
    console.log("Round One Winner is: Koala's won and have a score over 100");
}

//Round2

const roundTwoResultA = (dolphinScoresRound2 > koalasScoresRound2);
//console.log(`Round Two A winner: ${roundTwoResultA}`);
const roundTwoResultB = (koalasScoresRound2 > dolphinScoresRound2);
//console.log(`Round Two B Winner: ${roundTwoResultB}`);
const roundTwoResultC = (dolphinScoresRound2 === koalasScoresRound2);
//console.log(`Round Two is a Draw!`);
const roundTwoMinScoreA = (dolphinScoresRound2 >= 100);
//console.log(`Round Two Score A: ${roundTwoMinScoreA}`);
const roundTwoMinScoreB = (koalasScoresRound2 >= 100);
//console.log(`Round Two Score B: ${roundTwoMinScoreB}`);

if (roundTwoResultA && roundTwoMinScoreA) {
    console.log('Round Two winner is: Dolphins won this round and have a score over 100');
} else if (roundTwoResultB && roundTwoMinScoreA) {
    console.log("Round Two winner is: Koala's won this round but don't have a score over 100");
} else if (roundTwoResultC && roundTwoMinScoreA && roundTwoMinScoreB) {
    console.log("Round Two is a Draw!");
} else if (roundTwoResultA && !roundTwoMinScoreB) {
    console.log("Round Two Winner is: Dolphins won this round but don't have a score over 100");
} else if (roundTwoResultB && roundTwoMinScoreB) {
    console.log("Round Two Winner is: Koala's won and have a score over 100");
}

//Round3

const roundThreeResultA = (dolphinScoresRound3 > koalasScoresRound3);
console.log(`Round Three A winner: ${roundThreeResultA}`);
const roundThreeResultB = (koalasScoresRound3 > dolphinScoresRound3);
console.log(`Round Three B Winner: ${roundThreeResultB}`);
const roundThreeResultC = (dolphinScoresRound3 === koalasScoresRound3);
console.log(`Round Three is a Draw!: ${roundThreeResultC}`);
const roundThreeMinScoreA = (dolphinScoresRound3 >= 100);
console.log(`Round Three Score A: ${roundThreeMinScoreA}`);
const roundThreeMinScoreB = (koalasScoresRound3 >= 100);
console.log(`Round Three Score B: ${roundThreeMinScoreB}`);

if (roundThreeResultA && roundThreeMinScoreA) {
    console.log('Round Three winner is: Dolphins won this round and have a score over 100');
} else if (roundThreeResultB && roundThreeMinScoreA) {
    console.log("Round Three winner is: Koala's won this round but don't have a score over 100");
} else if (roundThreeResultC && roundThreeMinScoreA && roundThreeMinScoreB) {
    console.log("Round Three is a Draw!");
} else if (roundThreeResultA && !roundThreeMinScoreB) {
    console.log("Round Three Winner is: Dolphins won this round but don't have a score over 100");
} else if (roundThreeResultB && roundThreeMinScoreB) {
    console.log("Round Three Winner is: Koala's won and have a score over 100");
}


const avgScoreDolphins = (97 + 112 + 123) / 3;
const avgScoreKoalas = (97 + 112 + 123) / 3;
console.log(`Dolphins average score is ${avgScoreDolphins},
 Koala's average score is ${avgScoreKoalas}`);


if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log("Dolphin's Won!");
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
    console.log("Koalas Won!");
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
    console.log("It was a draw!");
} else {
    console.log("No one takes the Trophy");
}

//coding challenge 4

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(` The bill was £${bill}, the tip was £${tip}, and the total value of bill is £${bill + tip}`);
*/
