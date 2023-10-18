export class Passenger {
  constructor(public name: string, public passportNum: number) {}

  getPassengerInfo() {
    return `Passenger ${this.name} with passport number ${this.passportNum}`;
  }
}

export class Flight {
  constructor(
    public flightNumber: number,
    public departureCity: string,
    public arrivalCity: string,
    public departureDate: string,
    public seatsAvailable: number
  ) {}

  displayFlightInfo() {
    console.log(`Flight ${this.flightNumber} departs from ${this.departureCity} to ${this.arrivalCity} on ${this.departureDate}
    Seats available: ${this.seatsAvailable}`);
  }
}

export class Reservation {
  constructor(
    public passenger: Passenger,
    public flight: Flight,
    public reservationNumber: number
  ) {}

  getReservationInfo() {
    console.log(
      `Passenger ${this.passenger.getPassengerInfo()} has a flight ${
        this.flight.flightNumber
      } with reservation number ${this.reservationNumber}`
    );
  }

  changeStatus(booked: boolean): string {
    return booked ? "Booked" : "Unavailable";
  }

  bookSeat(quantity: number): number {
    return (this.flight.seatsAvailable -= quantity);
  }

  cancelReservation(quantity: number): number {
    return (this.flight.seatsAvailable += quantity);
  }
}

export default Passenger;
