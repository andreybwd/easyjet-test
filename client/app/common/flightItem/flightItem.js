import angular from 'angular';
import uiRouter from 'angular-ui-router';
import flightItemComponent from './flightItem.component';

let flightItemModule = angular.module('flightItem', [
  uiRouter
])

.component('flightItem', flightItemComponent)

.name;

export default flightItemModule;
