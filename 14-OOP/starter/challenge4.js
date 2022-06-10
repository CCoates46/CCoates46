'use strict';
/*
1. Re-create Challenge #3, but this time using ES6 classes
:create an'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

Test data:

§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%



class CarCl {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    accelerate() {
        const increasedSpeed = this.speed += 10
        console.log(`The new speed for the ${this.make} is ${increasedSpeed} km/h`)
    }

    brake() {
        const decreasedSpeed = this.speed -= 5
        console.log(`The new speed for the ${this.make} is ${decreasedSpeed} km/h`)
        return this
    }
    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
       this.speed = speed * 1.6
        console.log(`The speed converted back is ${this.speed} km/h`)
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo
        return this
    }

    accelerate() {
        this.speed += 20
        this.#charge--
        console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}%`)
        return this
    }
}

const car1 = new EVCl('Rivian', 120, 23)

car1
.accelerate()
.brake()
.chargeBattery(80)
.accelerate()
.accelerate()

console.log(car1.speedUS)

*/
