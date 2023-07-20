import calculate from '../components/logic/calculate';

describe('Test the calculate operations', () => {
  it('Test the AC button', () => {
    const ACBtn = calculate({}, 'AC');
    expect(ACBtn).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Test 3 when 4 and x are already recorded ', () => {
    const ACBtn = calculate({ total: '4', next: null, operation: 'x' }, '3');
    expect(ACBtn).toEqual({ total: '4', next: '3', operation: 'x' });
  });

  it('Test when 15 ÷ 2 are already recorded', () => {
    const btn = calculate({ total: '15', next: '2', operation: '÷' }, '=');
    expect(btn).toEqual({ total: '7.5', next: null, operation: null });
  });

  it('Test 6  when 4.18 are already recorded', () => {
    const btn = calculate({ next: '4.18', total: null }, '6');
    expect(btn).toEqual({ next: '4.186', total: null });
  });

  it('Test + when  49 % 5 are already recorded', () => {
    const btn = calculate({ total: '49', next: '5', operation: '%' }, '+');
    expect(btn).toEqual({ total: '4', next: null, operation: '+' });
  });
});