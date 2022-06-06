
//1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
//2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
//by 1.6)
//3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
//converts it to km/h before storing the value, by multiplying the input by 1.6)
//4. Create a new car and experiment with the 'accelerate' and 'brake'
//methods, and with the getter and setter.


//Test data:
//§ Data car 1: 'Ford' going at 120 km/h


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
    }

    get speedUS() {
        const UsSpeed = this.speed / 1.6
        console.log(`The speed in US is ${UsSpeed} mi/h`)
    }

    set speedUS(speed) {
       this.speed = speed * 1.6
        console.log(`The speed converted back is ${this.speed} km/h`)
    }
}

const car = new CarCl('Ford', 120)

car.accelerate()
car.brake()
car.speedUS
car.accelerate()
car.speedUS
car.brake()
car.speedUS
car.speedUS = 50



