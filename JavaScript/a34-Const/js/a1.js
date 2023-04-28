class Car {
    constructor(manufacturer, model, displacement, powerOutput, weight) {
        this.manufacturer = manufacturer
        this.model = model
        this.displacement = displacement
        this.powerOutput = powerOutput
        this.weight = weight
        }

    makeSound() {
        console.log(
            this.name + 
            " says mmmmm to " +
            this.food
            )
    }
}
const Porche959 = new Car("Porche", 959, "2.8L", "450ps, 500nm", "1450kg")

const Porche930 = new Car("Porche", 930, "3.0L", "260ps, 329nm", "1210kg")

