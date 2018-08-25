import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
	const comp = shallow(<App />);
	expect(comp.exists()).toEqual(true);
	/*   const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div); */
});
