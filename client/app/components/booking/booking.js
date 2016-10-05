import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookingComponent from './booking.component';

let bookingModule = angular.module('booking', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('booking', {
      url: '/',
      component: 'booking'
    });
})

.component('booking', bookingComponent)

.name;

export default bookingModule;
