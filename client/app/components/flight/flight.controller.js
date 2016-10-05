import {PAYMENTS, DEFAULT_PAYMENT} from "../../constants";

class FlightController {
  constructor(flightList, $state) {
    "ngInject";

    this.flightList = flightList;
    this.payments   = PAYMENTS;
    this.payment    = DEFAULT_PAYMENT;

    this.$onInit = () => {
      this.flightList
        .loadFlight($state.params.id)
        .then(flight => this.flight = flight);
    }
  }
}

export default FlightController;
