import calculate from '../components/logic/calculate';

describe('Test the calculate operations', () => {
  it('Test the AC button', () => {
    const ACButton = calculate({}, 'AC');
    expect(ACButton).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Test 9 button properly when 3 and x are already recorded ', () => {
    const ACBtn = calculate({ total: '3', next: null, operation: 'x' }, '9');
    expect(ACBtn).toEqual({ total: '3', next: '9', operation: 'x' });
  });

  it('Test 8 button properly when 4.33 are already recorded', () => {
    const btn = calculate({ next: '4.33', total: null }, '8');
    expect(btn).toEqual({ next: '4.338', total: null });
  });
});
