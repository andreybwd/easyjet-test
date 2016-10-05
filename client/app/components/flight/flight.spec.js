import FlightModule from './flight'
import FlightController from './flight.controller';
import FlightComponent from './flight.component';
import FlightTemplate from './flight.html';
import FlightList from "../../services/flightList";

describe('Flight', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FlightModule));
  beforeEach(inject((_$rootScope_, $state) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FlightController(flightList, $state);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
  });

  describe('Component', () => {
      // component/directive specs
      let component = FlightComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FlightTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FlightController);
      });
  });
});
