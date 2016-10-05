import angular from 'angular';
import Booking from './booking/booking';
import Flight from './flight/flight'

let componentModule = angular.module('app.components', [
  Booking,
  Flight
])

.name;

export default componentModule;
