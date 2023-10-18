export class Passenger {
  constructor(name, passportNum) {
    this.name = name;
    this.passportNum = passportNum;
  }
  getPassengerInfo() {
    return `Passenger ${this.name} with passport number ${this.passportNum}`;
  }
}

export class Flight {
  constructor(
    flightNumber,
    departureCity,
    arrivalCity,
    departureDate,
    seatsAvailable
  ) {
    this.flightNumber = flightNumber;
    this.departureCity = departureCity;
    this.arrivalCity = arrivalCity;
    this.departureDate = departureDate;
    this.seatsAvailable = seatsAvailable;
  }
  displayFlightInfo() {
    return console.log(
      `Flight ${this.flightNumber} departs from ${this.departureCity} to ${this.arrivalCity} on ${this.departureDate}
      Seats available: ${this.seatsAvailable}`
    );
  }
}

export class Reservation {
  constructor(passenger, flight, reservationNumber) {
    this.passenger = passenger;
    this.flight = flight;
    this.reservationNumber = reservationNumber;
    this.status = this.status;
  }
  getReservationInfo() {
    return console.log(
      `Passenger ${this.passenger.getPassengerInfo()} has a flight ${
        this.flight.flightNumber
      } with reservation number ${this.reservationNumber}`
    );
  }
  changeStatus(booked) {
    if (booked) {
      return `Booked`;
    } else {
      return `Unavailable`;
    }
  }
  bookSeat(quantity) {
    return (this.seatsAvailable -= quantity);
  }
  cancelReservation(quantity) {
    return (this.seatsAvailable += quantity);
  }
}

export default Passenger;
