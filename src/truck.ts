/**
 * the stack calling program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-4
 */

import Vehicle from './vehicle'

class Truck extends Vehicle {
  // license plate
  private licensePlate: string

  // This gets the variables and the color, licensePlate, and hte max Speed
  constructor(
    color: string,
    licensePlate: string,
    maxSpeed: number,
    numberTires: number
  ) {
    super(color, maxSpeed, numberTires)
    this.licensePlate = licensePlate
  }

  // license plate getter
  getLicensePlate(): string {
    return this.licensePlate
  }

  // license plate setter
  setLicensePlate(licensePlateNew: string): void {
    this.licensePlate = licensePlateNew
  }

  // method that calculates the applied air pressure
  provideAir(airPressure: number): void {
    super.setSpeed(super.getSpeed() - airPressure / 2)

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }

  // this method displays the status
  status(): void {
    console.log(`
     ---> Speed: ${super.getSpeed()}
     ---> MaxSpeed: ${super.getMaxSpeed()}
     ---> Color: ${super.getColor()}
     ---> License Plate: ${this.licensePlate}
     ---> Number of tires: ${super.getTires()}
    `)
  }
}

// export class
export = Truck
