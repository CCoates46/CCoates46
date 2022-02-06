'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ], [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

/*
//Task 1
const [players1, players2] = game.players;

console.log(players1, players2);


//Task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//Task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Task4
const playersFinal1 = [...allPlayers, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal1);

//Task5
const {
      odds: { team1, x: draw, team2},
  }  = game;
console.log(team1, draw, team2);



//Task6
const printGoals = function (...players) {
      console.log(`${players.length} goals were scored by ${players} `);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//Task7

console.log({team1: team1} || {draw: draw} || {team2: team2});



team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win')
*/

//Assignment 2
/*
//Task 1
const goalsScored = Object.entries(game.scored);
console.log(goalsScored);

for (let[key, name] of Object.entries(game.scored)) {
      key ++;
      console.log(`Goal ${key}: ${name}`)
    };

//Task 2

const odds = Object.values(game.odds);
//console.log(odds);

let sum = 0;
for (let i = 0; i < odds.length; i++) {
      sum += odds[i];
};
     let average = sum / odds.length;
     console.log(`The total odds are: ${sum} and the average odds are therefore ${average}`);

//Task 3

for (const [team, odd] of Object.entries(game.odds)) {
      const teamStr = team === 'x' ? 'draw': `victory ${game[team]}`;
      console.log(`Odds of ${teamStr}: ${odd}`)
};

//Task 4

const scorers = {};

for (const player of game.scored) {
      scorers[player] ? scorers[player]++ : (scorers[player] = 1);
};
console.log(scorers);
*/

const gameEvents = new Map([ 
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'], 
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card']
]);

//Task 1

const events = [...new Set (gameEvents.values())];
//console.log(events)

//Task 2

gameEvents.delete(64);
//console.log(gameEvents);

//Task 3

const lengthOfGame = 90
const averageEvent = lengthOfGame / gameEvents.size
//console.log(`An event happened, on average, every ${averageEvent} minutes"`);

//Task 4
/*
for (const [key, value] of gameEvents) {
    console.log(key <= 45 ? `[FIRST HALF] ${key}: ${value}` : 
    `[SECOND HALF] ${key}: ${value}`)
}


//Coding Challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textArea').value
    const rows = text.split('\n')

   for (const [i,row] of rows.entries()){
    const [first, second] = row.toLowerCase().trim().split('_')
    //console.log(row, first, second)
    const output = `${first}${second.replace(
        second[0], 
        second[0].toUpperCase()
        )}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`)
   }
})
*/




