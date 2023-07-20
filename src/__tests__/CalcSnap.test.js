import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator Snapshot', () => {
  it('Should be same as the calculator page', () => {
    const CalcPage = renderer.create(<Calculator />).toJSON();
    expect(CalcPage).toMatchSnapshot();
  });
});
