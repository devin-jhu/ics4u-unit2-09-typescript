/**
 * the stack calling program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-4
 */

class Vehicle {
  private color: string
  private speed = 0
  private readonly maxSpeed: number
  private readonly numberTires: number

  constructor(color: string, maxSpeed: number, numberTires: number) {
    this.color = color
    this.maxSpeed = maxSpeed
    this.numberTires = numberTires
  }

  // status
  status(): void {
    console.log(` 
    → Color: ${this.color}
    → Max Speed: ${this.maxSpeed}
    → Speed: ${this.speed}
    → Number of tires: ${this.numberTires}`)
  }

  // vehicle color getter
  getColor(): string {
    return this.color
  }

  // vehicle color setter
  setColor(userColor: string): void {
    this.color = userColor
  }

  // vehicle speed setter
  setSpeed(userSpeed: number): void {
    this.speed = userSpeed
  }

  // speed getter
  getSpeed(): number {
    return this.speed
  }

  // max speed getter
  getMaxSpeed(): number {
    return this.maxSpeed
  }

  // getter of tires
  getTires(): number {
    return this.numberTires
  }

  // vehicle acceleration
  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // vehicle brake
  break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

// export class
export = Vehicle
