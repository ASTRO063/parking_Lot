import { Car } from "./car";

export class ParkingLot{
    parking_slots : number =6;
    parked_vehicles: Car[] = [];

    constructor(slots:number,vechiles: Car[]=[]){
        this.parking_slots=slots;
        this.parked_vehicles=vechiles;
        console.log(`Created a parking lot with ${this.parking_slots} slots`);
    }
    
}