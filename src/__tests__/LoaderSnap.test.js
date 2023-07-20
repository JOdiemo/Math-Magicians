import React from 'react';
import renderer from 'react-test-renderer';
// import { BrowserRouter as Router } from 'react-router-dom';
import Loader from '../components/Loader';

describe('Loader component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Loader />);
    expect(tree).toMatchSnapshot();
  });
});
