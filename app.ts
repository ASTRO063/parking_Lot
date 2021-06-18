import { Car } from "./src/car";
import { ParkingLot } from "./src/parkingLot";
import { createReadStream } from "fs";
import { createInterface } from "readline";

function handler(parameter: string[]) {
  switch (parameter[0]) {
    case "create_parking_lot":
      parking_lot = new ParkingLot(+parameter[1]);
      break;
    case "park":
      let slot: number = parking_lot.getAvailableSlots();
      if (slot >= 0) {
        let new_car: Car = new Car(parameter[1], parameter[2]);
        parking_lot.park(new_car, slot);
      } else {
        console.log("No free slots are available");
      }
      break;
    case "leave":
      parking_lot.leave(+parameter[1]);
      break;
    case "status":
      console.log(parking_lot.status());
      break;
    case "registration_numbers_for_cars_with_colour":
      console.log(parking_lot.registrationNumbersOfCarWithColour(parameter[1]));
      break;
    case "slot_numbers_for_cars_with_colour":
      console.log(parking_lot.slotNumbersForCarsWithColour(parameter[1]));
      break;
    case "slot_number_for_registration_number":
      console.log(parking_lot.slotNumberForRegistrationNumber(parameter[1]));
      break;
  }
}

function fileInput(readFile: string) {
  const rlInterface = createInterface({
    input: createReadStream(`${readFile}`),
    output: process.stdout,
    terminal: false, // to indicate this is not TTY
  });
  let parameter: string[];
  rlInterface.on("line", (line) => {
    parameter = line.toString().trim().split(" ");
    if (parameter[0] == "exit") {
      rlInterface.close();
    }
    handler(parameter);
  });
}

function commandLineInput() {
  let input;
  let parameter: string[];
  process.stdin.on("readable", function () {
    while ((input = process.stdin.read()) !== null) {
      parameter = input.toString().trim().split(" ");
      if (parameter[0] == "exit") {
        process.exit();
      }
      handler(parameter);
    }
  });
}

const main = function (argv: string[]) {
  if (argv.length) {
    fileInput(argv[0]);
  } else {
    commandLineInput();
  }
};

var parking_lot: ParkingLot;

main(process.argv.slice(2));
