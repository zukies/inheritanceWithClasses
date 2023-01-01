'use strict';
class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

class EVCl extends carCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accilerate() {
    this.speed += 10;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/hrs with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(
      `${this.make} is going at ${this.speed}km/hr with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
  chargeBattery(charge) {
    this.#charge = charge;

    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
rivian.accilerate().chargeBattery(60).chargeBattery(50).accilerate();
rivian.brake();
