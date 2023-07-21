import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Snapshot of home page', () => {
  it('Should give smilar Homepage shot', () => {
    const HomeSnap = renderer.create(<Home />).toJSON;
    expect(HomeSnap).toMatchSnapshot();
  });
});
