import LocalStorageModule from 'angular-local-storage';
import FlightList from './flightList';
import { flightListMock } from './flightList.mock';
import { DEFAULT_FILTER_STATE } from "../constants";

describe('FlightList service', () => {

  /** @type {FlightList} */
  let flightList;

  beforeEach(window.module(LocalStorageModule));
  beforeEach(inject(($http, localStorageService) => {
    flightList = new FlightList($http, localStorageService);
    flightList.filterState = DEFAULT_FILTER_STATE;
    flightList.list = flightListMock;
    flightList.filter();
  }));

  describe('Filtering', () => {
    it('correctly handle filter with default filterState', () => {
      expect(flightList.filteredList.length).to.have.length.eq(4);
    });

    it('correctly handle filter with custom filterState', () => {
      flightList.filterState.localDepartureDay = {value : 1};
      flightList.filterState.localDepartureMonth = {value : "7.2016"};
      flightList.filter();
      expect(flightList.filteredList.length).to.have.length.eq(4);

      flightList.filterState.priceTo = 60;
      flightList.filter();
      expect(flightList.filteredList.length).to.have.length.eq(1);
    });

    it('correctly handle filterDepartureDate', () => {
      let item = {};

      item = flightListMock[0];
      expect(flightList.filterDepartureDate(item)).to.be.true;

      item = flightListMock[4];
      expect(flightList.filterDepartureDate(item)).to.be.false;

      flightList.filterState.localDepartureDay = {value : 1};
      flightList.filterState.localDepartureMonth = {value : "7.2016"};
      expect(flightList.filterDepartureDate(item)).to.be.true;
    });

    it('correctly handle filterDepartureAirport', () => {
      let item = {};

      item = flightListMock[0];
      expect(flightList.filterDepartureAirport(item)).to.be.true;

      item.departureAirportCode = "TST";
      expect(flightList.filterDepartureAirport(item)).to.be.false;

      flightList.filterState.departureAirport.value = "TST";
      expect(flightList.filterDepartureAirport(item)).to.be.true;
    });

    it('correctly handle filterArrivalAirport', () => {
      let item = {};

      item = flightListMock[0];
      expect(flightList.filterArrivalAirport(item)).to.be.true;

      item.arrivalAirportCode = "TST";
      expect(flightList.filterArrivalAirport(item)).to.be.false;

      flightList.filterState.arrivalAirport.value = "TST";
      expect(flightList.filterArrivalAirport(item)).to.be.true;
    });

    it('correctly handle filterPriceTo with empty filter', () => {
      let item = {};

      item = flightListMock[0];
      expect(flightList.filterPriceTo(item)).to.be.true;
    });

    it('correctly handle filterPriceTo', () => {
      let item = {};

      item = flightListMock[0];

      flightList.filterState.priceTo = 50;
      expect(flightList.filterPriceTo(item)).to.be.true;

      flightList.filterState.priceTo = 40;
      expect(flightList.filterPriceTo(item)).to.be.false;
    });

    it('correctly handle filterSeats', () => {
      let item = {};

      item = flightListMock[0];
      expect(flightList.filterSeats(item)).to.be.true;

      flightList.filterState.seats = {adult : 10};
      expect(flightList.filterSeats(item)).to.be.false;

      item.seatsAvailable = 10;
      expect(flightList.filterSeats(item)).to.be.true;
    });
  });

  describe('Total', () => {
    it('correctly handle getFlightTotal with default filterState', () => {
      let item = {};
      let totalAfter = {
        "value": 27.99,
        "valueWithDebitCard": 40.99,
        "valueWithCreditCard": 41.81
      }

      let total = flightList.getFlightTotal(flightListMock[0]);
      expect(total).to.deep.equal(totalAfter);
    });

    it('correctly handle getFlightTotal with custom filterState', () => {
      let item = {};
      let totalAfter = {
        "value": 140.97,
        "valueWithDebitCard": 179.97,
        "valueWithCreditCard": 183.57
      }

      flightList.filterState.seats = {adult : 2, child : 1};
      let total = flightList.getFlightTotal(flightListMock[1]);
      expect(total).to.deep.equal(totalAfter);
    });
  })
});
