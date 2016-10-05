import BookingModule from './booking'
import BookingController from './booking.controller';
import BookingComponent from './booking.component';
import BookingTemplate from './booking.html';
import flightList from "../../services/flightList";

describe('Booking', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BookingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BookingController(flightList);
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
      let component = BookingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BookingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BookingController);
      });
  });
});
