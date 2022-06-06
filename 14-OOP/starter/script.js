'use strict';
/*
//constructor function
const Person = function (firstName, birthYear){
   this.firstName = firstName
   this.birthYear = birthYear
}
//new objects
 const clare = new Person('Clare', 1975)
 console.log(clare)

 const matilda = new Person('Matilda', 1991)
 const jack = new Person('Jack', 1975)
 console.log(matilda, jack)

 console.log(jack instanceof Person)

 //1. New {} is created
 //2. function is called this = {}
 //3. {} is linked to prototype
 //4. function automatically return {}

 //prototypes

 console.log(Person.prototype)
 
 Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
 }

 clare.calcAge()
 matilda.calcAge()

 console.log(clare.__proto__)
 console.log(clare.__proto__ === Person.prototype)

Person.hey = function() {
   console.log('Hey there 👋')
   console.log(this)
}

Person.hey()

 console.log(Person.prototype.isPrototypeOf(clare))

 console.log(clare.calcAge)

 Person.prototype.species = "homo Sapiens"
 console.log(clare, matilda)
 console.log(clare.species, matilda.species)

 console.log(clare.hasOwnProperty('firstName'))
 console.log(clare.hasOwnProperty('species'))

 //Object.prototype (top of prototype chain)
 console.log(clare.__proto__)
 console.log(clare.__proto__.__proto__)
 console.log(clare.__proto__.__proto__.__proto__)

 console.dir(Person.prototype.constructor)

 //protoype of arrays

 const arr = [2, 5, 8, 10, 14]

 console.log(arr.__proto__) // new Array === []
 console.log(arr.__proto__ === Array.prototype)

 console.log(arr.__proto__.__proto__)

 console.dir(document.querySelector('h1'))

 console.dir(x => x + 1)


 //ES6 Classes

 //class expression
 //const PersonCl = class {}

 //class declaration
 class PersonCl {
   constructor(fullName, birthYear){
      this.fullName = fullName
      this.birthYear = birthYear
   }

   //Methods will be added to .prototype property
   calcAge(){
      console.log(2037 - this.birthYear)
   }

   get Age() {
      return 2037 - this.birthYear
   }

   set fullName(name) {
      console.log(name)
      if(name.includes(' ')) this._fullName = name
      else alert(`${name} is not a full name!`)
   } 

   get fullName() {
      return this._fullName
   }

   static hey() {
      console.log('Hey There 👋')
   }
 }

 const jessica = new PersonCl('Jessica Davis', 1996)
 console.log(jessica)

 jessica.calcAge()
 console.log(jessica.Age)

 console.log(jessica.__proto__ === PersonCl.prototype)

 PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.fullName}`)
 }

 jessica.greet()
 PersonCl.hey()
 
 const walter = new PersonCl('Walter white', 1965)

 //Getters and Setters

 const account ={
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
       this.movements.push(mov)
    },
 }

 console.log(account.latest)
 account.latest = 50
 console.log(account.movements)
 

 //Object.create method

 const PersonProto = {
    calcAge() {
       console.log(2037 - this.birthYear)
    }
 }

 const steven = Object.create(PersonProto)
 console.log(steven)
 steven.name = 'Steven'
 steven.birthYear = 1990
 steven.calcAge()

 console.log(steven.__proto__)
 */