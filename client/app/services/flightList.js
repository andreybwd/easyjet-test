import {API_URL, DEFAULT_FILTER_STATE, DEFAULT_PAYMENT} from "../constants";

export default class FlightList {
  constructor($http, localStorageService) {
    "ngInject";
    this.$http = $http;
    this.localStorageService = localStorageService;
    this.filterState = this.localStorageService.get("filterState") || DEFAULT_FILTER_STATE;
    this.filteredList = this.list = [];
  }

  load() {
    return this.$http.get(API_URL)
      .then(data => {
        this.list = data.data;
        this.filter();
        return this.list;
      });
  }

  loadFlight(id) {
    return this.load()
      .then(flights => {
        let flight = flights.filter(flight => flight.id === id).pop();
        flight.total = this.getFlightTotal(flight);
        return flight;
      })
  }

  getFlightTotal(flight) {
    let total = {}
    for (let seat_type in this.filterState.seats) {
      for (let payment_type in flight.prices[seat_type]) {
        total[payment_type] = total[payment_type] || 0;
        total[payment_type] += this.filterState.seats[seat_type] * flight.prices[seat_type][payment_type];
      }
    }

    for (let payment_type in total) {
      total[payment_type] = parseFloat(parseFloat(total[payment_type]).toFixed(2));
    }

    return total;
  }

  filter(filterState = this.filterState) {
    this.filterState = Object.assign({}, filterState);
    this.localStorageService.set("filterState", this.filterState);
    this.filteredList = this.list
      .filter(this.filterDepartureAirport)
      .filter(this.filterArrivalAirport)
      .filter(this.filterDepartureDate)
      .filter(this.filterPriceTo)
      .filter(this.filterSeats)
    ;
  }

  filterDepartureDate = (item) => {
    let date          = new Date(item.localDepartureTime);
    let filter_month  = this.filterState.localDepartureMonth.value.split(".");

    let item_date = {
      day    : date.getDate(),
      month  : date.getMonth() + 1,
      year   : date.getFullYear()
    }

    let filter_date = {
      day    : this.filterState.localDepartureDay.value,
      month  : filter_month[0],
      year   : filter_month[1]
    }

    for (let prop in item_date) {
      if (parseInt(item_date[prop]) !== parseInt(filter_date[prop])) {
        return false;
      }
    }

    return true;
  }

  filterDepartureAirport = (item) => {
    if (item.departureAirportCode === this.filterState.departureAirport.value) {
      return true;
    }

    return false;
  }

  filterArrivalAirport = (item) => {
    if (item.arrivalAirportCode === this.filterState.arrivalAirport.value) {
      return true;
    }

    return false;
  }

  filterPriceTo = (item) => {
    let filter_price = parseInt(this.filterState.priceTo) || 0;
    if (!filter_price) {
      return true;
    }

    if (item.prices.adult.valueWithDebitCard <= filter_price) {
      return true;
    }

    return false;
  }

  filterSeats = (item) => {
    let filter_seats = {
      adult: parseInt(this.filterState.seats.adult) || 1,
      child: parseInt(this.filterState.seats.child) || 0,
    }

    if (item.seatsAvailable >= filter_seats.adult + filter_seats.child) {
      return true;
    }

    return false;
  }
}
