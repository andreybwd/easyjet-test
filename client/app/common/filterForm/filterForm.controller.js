import {DAYS, MONTHS, DEPARTURE_AIRPORTS, ARRIVAL_AIRPORTS} from "../../constants";

class FilterFormController {
  constructor(flightList) {
    "ngInject";

    this.flightList   = flightList;
    this.filterState  = Object.assign({}, this.flightList.filterState);

    this.days               = DAYS;
    this.months             = MONTHS;
    this.departure_airports = DEPARTURE_AIRPORTS;
    this.arrival_airports   = ARRIVAL_AIRPORTS;
  }
}

export default FilterFormController;
