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




