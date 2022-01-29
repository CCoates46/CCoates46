'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Strings Part 1
const airline = 'TAP Air Portugal'
const plane = 'A320'
/*
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])

console.log('B737' [0]);
console.log('B737' [1])

console.log(airline.length)
console.log('B737'.length)

console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'))

console.log(airline.slice(4))
console.log(airline.slice(4, 7))

console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ')+1))

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
 const s = seat.slice(-1);
 if (s === 'B' || s === 'E')
console.log('You got the middle seat')
  else 
   console.log('You got Lucky')
};

checkMiddleSeat('11B');
checkMiddleSeat('12A')
checkMiddleSeat('9E')

console.log(new String ('clare'))
console.log(typeof new String('clare'))
*/

//Part 2

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

const passengerCorrect = function (passenger) {
  const passengerLower = passenger.toLowerCase()
  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect)
}

passengerCorrect('jOnAS')
passengerCorrect('CLARE')
passengerCorrect('RIchaRD')

//comparing emails
const email ='hello@jonas.io'

const loginEmail = '  Hello@Jonas.Io \n'
//long method to trim an email 
const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail)

//short version to trim an email
const normalisedEmail = loginEmail.toLocaleLowerCase().trim()
console.log(normalisedEmail)

console.log(email === normalisedEmail)

//Replacing parts of strings

const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.')
console.log(priceUS)

//Replacing words in a string

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replaceAll('door', 'gate'))

//regex
console.log(announcement.replace(/door/g, 'gate'))

//Booleans

const planeNew = 'A320neo'
console.log(planeNew.includes('A320'))
console.log(planeNew.includes('B230'))

console.log(planeNew.startsWith('A3'))
console.log(planeNew.startsWith('B'))

console.log(planeNew.endsWith('o'))
console.log(plane.endsWith('t'))

const planeAir = 'Airbus A320neo'

if (planeAir.startsWith('Air') && planeAir.endsWith('neo')) {
  console.log('Part of the new Airbus family')
}

const checkBaggage = function(items) {
  const baggage = items.toLowerCase()
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board')
  } else {
    console.log('Welcome Aboard')
  }
}

checkBaggage('I have a laptop, some Food and a KNIFE')
checkBaggage('Socks and Camera')
checkBaggage('Got some snacks and a Gun for protection')














/*
//Enhanced Object Literals
const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
//Amended opening hours to account for Enhanced object literals
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Enhanced object literals
  openingHours,

  //Functions returning an Array
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //Destructuring Objects and setting default values
  orderDelivery({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }) {
    //console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  
  //Spread operator on functions
  orderPasta(ing1, ing2, ing3) {
    //console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  
  //Rest pattern in a function
  orderPizza(mainIngredient, ...otherIngredients) {
    //console.log(`Here is your yummy pizza. The main ingredient was ${mainIngredient} and your optional ingredients were ${otherIngredients}`);
  },
};

//Destructuring Objects - calling the function
  restaurant.orderDelivery ({
    time: '22:30',
    address: 'Via del Sole, 29',
    mainIndex: 2,
    starterIndex: 2,
  });
//Destructuring Objects - calling the function for default values
  restaurant.orderDelivery ({
    address: 'Via del Sole, 29',
    starterIndex: 1,
  });

  //calling the Rest pattern function
  restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');

  //Spread Operator - calling the function using prompt windows

  //const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
  //console.log(ingredients);

  //restaurant.orderPasta(...ingredients);

/*
//Destructuring Arrays

let [main, ,secondary] = restaurant.categories;
//console.log(main, secondary);

//Switching Variables

[main, secondary] = [secondary, main];
//console.log(main, secondary);

//Calling the Order Function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Arrays
const nested  = [2, 4, [5, 6]];
const [a, ,[b,c]] = nested;
console.log(a,b,c);

const [p=1, q=1, r=1] = [8];
console.log(p,q,r);


//Destructuring Objects
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name:restaurantName,
openingHours:hours,
categories:tags} = restaurant;
console.log(restaurantName, hours, tags);
const {menu = [], starterMenu:starters = []} = restaurant;
console.log(menu, starters);

//Mutating Variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14};

({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {fri} = openingHours;
console.log(fri);

const {fri : {open, close}} = openingHours;
console.log(open, close);

//Spread Operator
const arr = [7, 8, 9]; 
const badNewArr = [1, 2, arr];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(...newArr); 

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

const [g, , , q] = newMenu;
console.log(g, q);

//Joining 2 arrays

const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);
console.log(...fullMenu;)


const mergeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...mergeMenu);

// Copy Arrays
const menuCopy = [...restaurant.mainMenu];
console.log(menuCopy);


const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

//Spread operator on Strings

const str1 = 'Clare';
const str2 = 'Coates'
const letters = [...str1, '.E.', ...str2];
console.log(...letters);

//Spread Operator in Objects

const newRestaurant = {foundedIn:1986, ...restaurant, owner: 'Guiseppe'};
console.log(newRestaurant);

//Creating copied objects using spread operator

const restaurantCopy = {...restaurant};
restaurant.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);


//Rest Pattern 

const arr = [1,2, ...[3,4]];
console.log(arr);

//Using Rest pattern and destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others);

//Using Spread and Rest together

const [Pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Pizza, Risotto, otherFood);

//Rest pattern in objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers [i];
  console.log(sum);
};

add(2,3);
add(5,3,7,2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

//Short Circuiting
console.log(46 || 'Clare');

console.log('' || 'Clare');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//Practical application of Short Circuiting

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

restaurant.numGuests = 23;
//const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//AND operator
console.log(0 && 'Jonas');
console.log(46 && 'Jonas');

console.log('Hello' && 46 && null && 'Jonas');

//Practical Application of AND operator
//checking if method exists
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//can change above to a simpler way
restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');

//NULLISH COALESCING OPERATOR ??

//restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);



//Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//OR Assignment Operator

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//Nullish assignment operator

//rest1.numGuests ??= 10;
//rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS';
//rest2.owner = rest2.owner  && '<ANONYMOUS';

//Logical AND assignment operator
/*
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


//FOR-OF Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log([...item]);
};

//Spreading the menu.entries method
console.log([...menu.entries()]);

//Creating a numbered effect using dot.entries method within a for-of loop
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`)
}

//Destructure above
for (const[i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`)
}
*/


// Without Optional Chaining

//console.log(restaurant.openingHours.mon);
//console.log(restaurant.openingHours.mon.open);

//if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//if (restaurant.openingHours.Fri) console.log(restaurant.openingHours.Fri.open);

//WITH Optional Chaining

//console.log(restaurant.openingHours?.mon?.open);
//console.log(restaurant.openingHours.Fri?.open);

//Optional Chaining example
/*
const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we are open: ${open}`);
}


// optional Chaining on Methods
console.log(restaurant.order?.(0, 1) ?? 'This method does not exist');

//optional chaining on arrays
//const users = [{name: 'Clare', email: 'calre@hello.com'}];
const users = []
console.log(users[0]?.name ?? 'User array is empty');


//Looping over Object keys
//property names/keys

const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `
};
console.log(openStr);

//property values

const values = Object.values(openingHours);
//console.log(values);

for (const time of values) {
  //console.log(time);
};

//property entries

const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} hours and we close at ${close} hours`);
};


//Sets

const ordersSet = new Set([
  'Pizza', 
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza']);
/*
  console.log(ordersSet);

  console.log(new Set('Clare'))
  console.log(new Set ());

  //Checking size of set

  console.log(ordersSet.size);

  //Checking for an element in a set

  console.log(ordersSet.has("Pizza"));
  console.log(ordersSet.has('Bread'));

  //Adding to a set

  ordersSet.add('Garlic Bread', 'Garlic Bread');
  console.log(ordersSet);

  //Deleting an element from a set

  ordersSet.delete('Risotto');
  console.log(ordersSet);

  //Deleting all elements of a set
  
  //ordersSet.clear();
  console.log(ordersSet);

  //Looping over a set

  for (const order of ordersSet) console.log(order);

  // Use case example

  //creating a new set and converting the new set into an Array using spread operator

  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);

  //finding size

  console.log(new Set (['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)
console.log(new Set('Clarecoates').size)


//Maps

//creating a new map
const rest = new Map();

//adding to the map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

//chaining in a map
rest
.set('categories', ['Italiano', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are close :(');

//getting data from a map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('1'));

//checking a map for a key

console.log(rest.has('categories'));

//deleting a key

rest.delete(2);
console.log(rest);

// getting the size
console.log(rest.size)

//clearing a key

//rest.clear();
//console.log(rest.size);

//Using arrays or objects in Maps

const arr = [1,2];
console.log(rest.set(arr, 'Test'));

console.log(rest.get(arr));

//Dumb objects

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

//Maps Iteration

const question = new Map ([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'try Again']
]);

console.log(question);

console.log(Object.entries(openingHours));

//Quiz app

console.log(question.get(`question`));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
};
const answer = (Number(prompt('Your Answer')));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//converting a map back to an array

console.log([...question]);

console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/



