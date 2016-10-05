export const API_URL = "http://ejtestbed.herokuapp.com/flights";

let dates = [];
for (let i = 1; i <= 31; i++) {
  dates.push({value: i, name: i});
}
export const DAYS = dates;

export const MONTHS = [
  {value : "6.2016", name : "June 2016"},
  {value : "7.2016", name : "July 2016"},
  {value : "8.2016", name : "August 2016"},
  {value : "9.2016", name : "September 2016"},
  {value : "10.2016", name : "October 2016"},
  {value : "11.2016", name : "November 2016"},
];

export const DEPARTURE_AIRPORTS = [
  {value : "KRK", name : "Krakow KRK"},
  {value : "LIL", name : "Lille LIL"},
  {value : "LGW", name : "London Luton LTN"},
];

export const ARRIVAL_AIRPORTS = [
  {value : "SXF", name : "Berlin Schoenefeld (SXF)"},
  {value : "LPL", name : "Liverpool LPL"},
  {value : "CDG", name : "Paris Charles de Gaulle CDG"},
];

export const PAYMENTS = [
  {value : "valueWithCreditCard", name : "Credit Card"},
  {value : "valueWithDebitCard", name : "Debit Card"},
];

export const DEFAULT_FILTER_STATE = {
  localDepartureDay   : DAYS[29],
  localDepartureMonth : MONTHS[0],
  departureAirport    : DEPARTURE_AIRPORTS[2],
  arrivalAirport      : ARRIVAL_AIRPORTS[0],
  seats               : {adult : 1}
};

export const DEFAULT_PAYMENT = PAYMENTS[1];
