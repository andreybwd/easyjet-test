import template from './flightItem.html';
import controller from './flightItem.controller';
import './flightItem.styl';

let flightItemComponent = {
  restrict: 'E',
  bindings: {
    flight: '<'
  },
  template,
  controller
};

export default flightItemComponent;
