import angular from 'angular';
import FilterForm from './filterForm/filterForm';
import FlightItem from './flightItem/flightItem';

let commonModule = angular.module('app.common', [
  FilterForm,
  FlightItem
])

.name;

export default commonModule;
