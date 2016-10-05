class BookingController {
  constructor(flightList) {
    "ngInject";

    this.flightList   = flightList;

    this.flightList.load();
  }
}

export default BookingController;
