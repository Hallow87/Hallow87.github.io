class Car {
    constructor(manufacturer, model, displacement, powerOutput, weight) {
        this.manufacturer = manufacturer
        this.model = model
        this.displacement = displacement
        this.powerOutput = powerOutput
        this.weight = weight
        }

    getInfo(){
     console.log(
       this.manufacturer + " " +this.model +
       " weighs " + this.weight +
       " and has an output of " + this.powerOutput
        )
     }

     accelerate(){
         console.log("wroooom")
    }
}


    class My959 extends Car {
        constructor(manufacturer, model, displacement, powerOutput, weight) {
            super(manufacturer, model, displacement, powerOutput, weight)
            this.color = "Lilac"
        }
    }
    class My930 extends Car {
        constructor(manufacturer, model, displacement, powerOutput, weight) {
            super(manufacturer, model, displacement, powerOutput, weight)
            this.color = "Lilac"
        }
    }
    const Porche959 = new Car("Porche", 959, "2.8L", "450ps, 500nm", "1450kg")

    const Personal959 = new My959("Porche", 959, "2.8L", "450ps, 500nm", "1450kg")

    const Personal930 = new My930("Porche", 930, "3.0", "280ps, 320nm", "1200kg")
    Porche959.getInfo()
    Porche959.accelerate()