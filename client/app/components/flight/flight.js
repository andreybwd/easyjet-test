import angular from 'angular';
import uiRouter from 'angular-ui-router';
import flightComponent from './flight.component';

let flightModule = angular.module('flight', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('flight', {
      url: '/flight/:id',
      component: 'flight',
    });
})

.component('flight', flightComponent)

.name;

export default flightModule;
