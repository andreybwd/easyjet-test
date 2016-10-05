class BookingController {
  constructor(flightList) {
    "ngInject";

    this.flightList   = flightList;

    this.$onInit = () => {
      this.flightList.load();
    }
  }
}

export default BookingController;
