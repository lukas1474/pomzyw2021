import { React } from 'react';
import { shallow } from 'enzyme';
import { ProgramDepartmentsComponent } from './ProgramDepartments';

describe(`Component ProgramDepartments`, () => {
  it(`should render without crashing`, () => {
    const component = shallow(<ProgramDepartmentsComponent />);
    expect(component).toBeTruthy();
  });
});
