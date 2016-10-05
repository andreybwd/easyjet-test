class FlightItemController {
  constructor($state) {
    "ngInject";

    this.$state       = $state;
  }

  goFlight(id) {
    this.$state.go('flight', {id})
  }
}

export default FlightItemController;
