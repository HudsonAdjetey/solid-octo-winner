// Factory pattern

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.type = "car";
  }
}

class Trucks {
  constructor() {
    this.type = "Truck";
  }
}

// Car factory - 🏭
class VehicleFactory {
  static createVehicle(type) {
    switch (type) {
      case "car":
        return new Car();
      case "truck":
        return new Trucks();
      default:
        throw new Error("Invalid vehicle type");
    }
  }
}

const car = VehicleFactory.createVehicle("car");
console.log(car.type);
