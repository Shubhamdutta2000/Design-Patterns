// with ES6 Class

class Car {
    constructor(name, passengers, speed, color) {
        this.name = name;
        this.passengers = passengers;
        this.speed = speed;
        this.color = color;
    }

    accelerate() {
        this.speed = this.speed + 2
        print(self.speed)
        console.log(`${this.name} accelerated by ${this.speed} km/h!`);
    }
    drive() {
        console.log(`${this.name} start moving by ${this.speed} km/h!`);
    }
}

const car1 = new Car("Ford", 4, 5, "black");
const car2 = new Car("Ferrari", 5, 8, "red");
const car3 = new Car("BMW", 6, 9, "blue");

// This will return true
console.log(car1.accelerate === car2.accelerate);