import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Media from '../../app/javascript/components/Media';

test('Render test Search component', () => {
  const mediaTitle = "The Lord of the Rings: The Fellowship of the Ring";
  const testMedia = {
    "Title": mediaTitle,
    "Year": "2001",
    "imdbID": "tt0120737",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  };
  const search = shallow(<Media media={testMedia} />);

  expect(search.text()).toContain(mediaTitle);
});

