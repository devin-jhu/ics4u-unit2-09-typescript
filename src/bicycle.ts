/**
 * the stack calling program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-4
 */

import Vehicle from './vehicle'

class Bicycle extends Vehicle {
  private cadence = 0

  // cadence getter
  getCadence(): number {
    return this.cadence
  }

  // this method calculates the acceleration
  accelerate(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower
    super.setSpeed(this.cadence * 2)
  }

  // this method displays text
  ringBell(): void {
    console.log('ding ding')
  }

  // this method displays information about the bike
  status(): void {
    console.log(`
    ---> Speed: ${super.getSpeed()}
    ---> MaxSpeed: ${super.getMaxSpeed()}
    ---> Color: ${super.getColor()}
    ---> Cadence: ${this.cadence}
    ---> Number of tires: ${super.getTires()}
    `)
  }
}

// export class
export = Bicycle
