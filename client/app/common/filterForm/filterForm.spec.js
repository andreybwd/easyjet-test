import FilterFormModule from './filterForm'
import FilterFormController from './filterForm.controller';
import FilterFormComponent from './filterForm.component';
import FilterFormTemplate from './filterForm.html';
import flightList from "../../services/flightList";

describe('FilterForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FilterFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FilterFormController(flightList);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs

    it('has a days property', () => {
      let controller = makeController();
      expect(controller).to.have.property('days');
    });

    it('has a months property', () => {
      let controller = makeController();
      expect(controller).to.have.property('months');
    });

    it('has a departure_airports property', () => {
      let controller = makeController();
      expect(controller).to.have.property('departure_airports');
    });

    it('has a arrival_airports property', () => {
      let controller = makeController();
      expect(controller).to.have.property('arrival_airports');
    });

    it('has a flightList property', () => {
      let controller = makeController();
      expect(controller).to.have.property('flightList');
    });

    it('has a filterState property', () => {
      let controller = makeController();
      expect(controller).to.have.property('filterState');
    });
  });

  describe('Template', () => {
    // template specs
  });

  describe('Component', () => {
      // component/directive specs
      let component = FilterFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FilterFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FilterFormController);
      });
  });
});
