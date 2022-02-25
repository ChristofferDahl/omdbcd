import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { FormControl } from '@mui/material';

import Search from '../../app/javascript/components/Search';

test('Render test Search component', () => {
  const search = shallow(<Search />);

  expect(search.text()).toContain('SearchType');
  expect(search.find(FormControl)).toHaveLength(1);
});