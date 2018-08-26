import React from 'React';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { AddTodo } from '.';

describe('Given a ToDo component', () => {
  describe('When started', () => {
    it('Then it  renders successfully', () => {
      const comp = shallow(<AddTodo />);
      expect(comp.exists).toEqual(true);
    });
    it('And it has button todo', () => {
      const comp = shallow(<AddTodo />);

      expect(comp.find('.todo-submit').length).toEqual(1);
    });
  });
});
