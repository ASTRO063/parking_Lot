import { Car } from "./car";

export class ParkingLot{
    parking_slots : number =6;
    parked_vehicles: Car[] = [];

    constructor(slots:number,vechiles: Car[]=[]){
        this.parking_slots=slots;
        this.parked_vehicles=vechiles;
        console.log(`Created a parking lot with ${this.parking_slots} slots`);
    }
    get_available_slot():number{
        let len=[...this.parked_vehicles].length;
        if(len>=0 && len<this.parking_slots){
            return len+1;
        }
        for(let [i,car] of this.parked_vehicles.entries()){
            if(!car){
                return i+1;
            }
        }
        return -1;
    }
    park(vehicle: Car,slot_number:number):void{
        this.parked_vehicles[slot_number-1]=vehicle;
        console.log(`Allocated slot number: ${slot_number}`);
    }
}