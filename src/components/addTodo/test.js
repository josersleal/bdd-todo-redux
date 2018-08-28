import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './index';
import App from '../../App';

describe('Given a ToDo component', () => {
  describe('When started', () => {
    it('renders without crashing', () => {
      const comp = shallow(<App />);
      expect(comp.exists()).toEqual(true);
    });
    it('Then it  renders successfully', () => {
      const comp = shallow(<AddTodo />);
      expect(comp.exists()).toEqual(true);
    });
  });
});
