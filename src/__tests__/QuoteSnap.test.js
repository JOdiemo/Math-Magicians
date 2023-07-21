import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Should Match Quote Page', () => {
  it('Identical to Quote Page', () => {
    const QouteSnap = renderer.create(<Quote />).toJSON;
    expect(QouteSnap).toMatchSnapshot();
  });
});
