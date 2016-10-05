import angular from 'angular';

import flightList from './flightList';

let servicesModule = angular.module('app.services', []).service({
  flightList
})

.name;

export default servicesModule;
