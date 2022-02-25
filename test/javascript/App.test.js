import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../../app/javascript/components/App';

test('Render test App component', () => {
  const app = shallow(<App />);

  expect(app.text()).toContain('OMDBCD');
  expect(app.find('Search')).toBeTruthy();
  expect(app.text('Favorites')).toBeTruthy();
});