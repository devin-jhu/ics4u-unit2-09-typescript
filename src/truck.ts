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
  private airPressure: number

  // This gets the variables and the color, licensePlate, and hte max Speed
  constructor(
    color: string,
    licensePlate: string,
    maxSpeed: number,
    numberTires: number,
    airPressure: number
  ) {
    super(color, maxSpeed, numberTires)
    this.licensePlate = licensePlate
    this.airPressure = airPressure
  }

  // license plate getter
  getLicensePlate(): string {
    return this.licensePlate
  }

  // license plate setter
  setLicensePlate(licensePlateNew: string): void {
    this.licensePlate = licensePlateNew
  }

  // getter for airPressure
  getAirPressure(): number {
    return this.airPressure
  }

  // setter for airPressure
  setAirPressure(airPressure: number): void {
    this.airPressure = airPressure
  }

  // break method replacing airBrake
  break(breakPower: number, breakTime: number): void {
    super.setSpeed(
      super.getSpeed() - breakPower * breakTime - this.airPressure * breakTime
    )
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
