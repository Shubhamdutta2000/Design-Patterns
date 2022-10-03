

const Car = function (name, passengers, speed, color) {
    this.name = name;
    this.passengers = passengers;
    this.speed = speed;
    this.color = color;
}

Car.prototype.accelerate = function (target) {
    target.speed = target.speed + 2
    print(self.speed)
    console.log(`${target.name} accelerated by ${target.speed} km/h!`);
}

Car.prototype.drive = function (target) {
    console.log(`${target.name} start moving by ${target.speed} km/h!`);
}

const car1 = new Car("Ford", 4, 5, "black");
const car2 = new Car("Ferrari", 5, 8, "red");
const car3 = new Car("BMW", 6, 9, "blue");

// This will return true
console.log(car1.accelerate === car2.accelerate);

