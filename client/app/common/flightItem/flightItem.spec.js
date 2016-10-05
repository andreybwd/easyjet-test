import FlightItemModule from './flightItem'
import FlightItemController from './flightItem.controller';
import FlightItemComponent from './flightItem.component';
import FlightItemTemplate from './flightItem.html';

describe('FlightItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FlightItemModule));
  beforeEach(inject((_$rootScope_, $state) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FlightItemController($state);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a $state property', () => {
      let controller = makeController();
      expect(controller).to.have.property('$state');
    });

    it('has a goFlight method', () => {
      let controller = makeController();
      expect(controller).to.have.property('goFlight');
    });
  });

  describe('Template', () => {
    // template specs
  });

  describe('Component', () => {
      // component/directive specs
      let component = FlightItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FlightItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FlightItemController);
      });
  });
});
