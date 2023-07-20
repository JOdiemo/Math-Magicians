import React from 'react';
import renderer from 'react-test-renderer';
// import { BrowserRouter as Router } from 'react-router-dom';
import Button from '../components/Button';

describe('Button component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Button />);
    expect(tree).toMatchSnapshot();
  });
});