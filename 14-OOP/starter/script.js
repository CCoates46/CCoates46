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
 
/// Inheritance between Classes: Constructor Functions

 const Person = function (firstName, birthYear){
   this.firstName = firstName
   this.birthYear = birthYear
}

Person.prototype.calcAge = function() {
   console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
   Person.call(this, firstName, birthYear)
   this.course = course
}
//Linking prototypes
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

Student.prototype.introduce = function() {
   console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science')
console.log(mike)
mike.introduce()
mike.calcAge()
console.log(mike)
console.log(mike.__proto__)

console.dir(Student.prototype.constructor)

console.log(mike instanceof Student)
console.log(mike instanceof Person)


//Inheritance between Classes: ES6 Classes

class PersonCl {
   constructor(fullName, birthYear) {
      this.fullName = fullName
      this.birthYear = birthYear
   }

   //Methods will be added to .prototype property
   calcAge() {
      console.log(2037 - this.birthYear)
   }

   get Age() {
      return 2037 - this.birthYear
   }

   set fullName(name) {
      console.log(name)
      if (name.includes(' ')) this._fullName = name
      else alert(`${name} is not a full name!`)
   }

   get fullName() {
      return this._fullName
   }

   static hey() {
      console.log('Hey There 👋')
   }
}

class StudentCl extends PersonCl {
   constructor(fullName, birthYear, course) {
      //Always has to happen first
      super(fullName, birthYear)
      this.course = course
   }

   introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}`)
   }

   calcAge() {
      console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
   }
}

const martha = new StudentCl("Martha Jones", 2012, 'Computer Science')
martha.introduce()
martha.calcAge()


//Inheritance between Classes: Object.Create

const PersonProto = {
   calcAge() {
      console.log(2037 - this.birthYear)
   },

init(firstName, birthYear) {
      this.firstName = firstName
      this.birthYear = birthYear
   }
}

const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto)

StudentProto.init = function(firstName, birthYear, course) {
   PersonProto.init.call(this, firstName, birthYear)
   this.course = course
}

StudentProto.introduce = function() {
   console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const jay = Object.create(StudentProto)
jay.init('Jay', 2010, 'Computer Science')
jay.introduce()
jay.calcAge()


//More about classes

class Account {
   constructor(owner, currency, pin) {
      this.owner = owner
      this.currency = currency
      //protected property
      this._pin = pin
      this._movements = []
      this.locale = navigator.language

      console.log(`Thanks for opening an account ${owner}`)
   }

   //public interface

   getMovements() {
      return this._movements
   }

   deposit(val) {
      this._movements.push(val)
   }

   withdraw(val) {
      this.deposit(-val)
   }

   _approveLoan(val) {
      return true
   }

   requestLoan(val){
      if (this._approveLoan(val)) {
         this.deposit(val)
         console.log(`Loan Approved`)
      }
   }
}

const acc1 = new Account('Jonas', 'EUR', 1111)
acc1.deposit(250)
acc1.withdraw(140)

acc1.requestLoan(1000)
console.log(acc1.getMovements())
console.log(acc1)

//Private Clsss fields and methods

// 1) Public fields
// 2) Private fields
// 3) Public Methods
// 4)Privae Methods


class Account {
   // 1) Public Fields (instances)
   locale = navigator.language;

   // 2) Private Fields
   #movements = [];
   #pin;

   constructor(owner, currency, pin) {
      this.owner = owner
      this.currency = currency
      //protected property
      this.#pin = pin

      console.log(`Thanks for opening an account ${owner}`)
   }

   // 3) public methods

   getMovements() {
      return this.#movements
   }

   deposit(val) {
      this.#movements.push(val)
      return this
   }

   withdraw(val) {
      this.deposit(-val)
      return this
   }

   requestLoan(val) {
      if (this._approveLoan(val)) {
         this.deposit(val)
         console.log(`Loan Approved`)
         return this
      }
   }

   // 4) Private Methods (Not available as of June 2022)
   //#approveLoan(val) {
   _approveLoan(val) {
      return true
   }

}

const acc1 = new Account('Jonas', 'EUR', 1111)
acc1.deposit(250)
acc1.withdraw(140)

acc1.requestLoan(1000)
console.log(acc1.getMovements())
console.log(acc1)

//console.log(acc1.#movements)
//console.log(acc1.#pin)
//console.log(acc1.#approveLoan(1000))

// Chaining methods

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements())*/