import { Car } from "./car";

export class ParkingLot {
  parkingSlots: number = 6;
  parkedVehicles: Car[] = [];

  constructor(slots: number, vechiles: Car[] = []) {
    this.parkingSlots = slots;
    this.parkedVehicles = vechiles;
    console.log(`Created a parking lot with ${this.parkingSlots} slots`);
  }
  getAvailableSlots(): number {
    let len = this.parkedVehicles.length;
    let i: number, car: Car;
    // if (len >= 0 && len <= this.parkingSlots) {
      for ([i, car] of this.parkedVehicles.entries()) {
        if (!car) {
          return i + 1;
        }
      }

      return len < this.parkingSlots ? len + 1 : -1;
    // }
    // return -1;
  }
  park(vehicle: Car, slotNumber: number): void {
    this.parkedVehicles[slotNumber - 1] = vehicle;
    console.log(`Allocated slot number: ${slotNumber}`);
  }

  leave(slotNumber: number): void {
    if (slotNumber >= 1 && slotNumber <= this.parkingSlots) {
      delete this.parkedVehicles[slotNumber - 1];
      console.log(`Slot number ${slotNumber} is free`);
    }
  }
  status() {
    let status = "Slot No. Registration No Colour" + "\n";
    this.parkedVehicles.forEach((vehicle, index) => {
      if (vehicle) {
        let slot: string = (index + 1).toString().padEnd(9, " ");
        let reg_num: string = vehicle.registrationNumber.padEnd(16, " ");
        let colour: string = vehicle.colour;
        status += slot + reg_num + colour + "\n";
      }
    });
    return status;
  }

  registrationNumbersOfCarWithColour(colour: string): string {
    let registrationNums: string[] = [];
    this.parkedVehicles.forEach((vehcile, index) => {
      if (vehcile.colour === colour) {
        registrationNums.push(vehcile.registrationNumber);
      }
    });
    if (!registrationNums.length) {
      return "None";
    }
    return `${registrationNums.join(", ")}`;
  }
  slotNumbersForCarsWithColour(colour: string): string {
    let slots: string[] = [];
    this.parkedVehicles.forEach((vehcile, index) => {
      if (vehcile?.colour === colour) {
        index++;
        slots.push(index.toString());
      }
    });
    if (!slots.length) {
      return "None";
    }
    return `${slots.join(", ")}`;
  }
  slotNumberForRegistrationNumber(regstration_num: string) {
    for (let [i, car] of this.parkedVehicles.entries()) {
      if (car?.registrationNumber.includes(regstration_num)) {
        return i + 1;
      }
    }
    return "Not found";
  }
}
