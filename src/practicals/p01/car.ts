export class Car {
    brand: string;
    model: string;

    constructor() {
        this.brand = "";
        this.model = "";
    }
    
    start() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
    accelerate() {
        console.log(`${this.brand} ${this.model} is accelerating...`);
    }
    brake() {
        console.log(`${this.brand} ${this.model} is braking...`);
    }
    stop() {
        console.log(`${this.brand} ${this.model} is stopping...`);
    }
}
