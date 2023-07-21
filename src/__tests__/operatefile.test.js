import operate from '../components/logic/operate';

describe('Test for Addition', () => {
  it('should return the sum of 1 + 1 = 2', () => {
    const sum = operate(1, 1, '+');
    expect(sum).toBe('2');
  });

  it('Should return 6-4=2', () => {
    const diff = operate(6, 4, '-');
    expect(diff).toBe('2');
  });

  it('Returns 6/3 =2', () => {
    const div = operate(6, 3, '÷');
    expect(div).toBe('2');
  });

  it('Returns 6*3 =2', () => {
    const multiply = operate(6, 3, 'x');
    expect(multiply).toBe('18');
  });

  it('should return the division of 5 ÷ 0 = Can\'t divide by 0.', () => {
    const division = operate(3, 0, '÷');
    expect(division).toBe('Can\'t divide by 0.');
  });

  it('should return the multiplication of 8 x 2 = 16', () => {
    const multiplication = operate(8, 2, 'x');
    expect(multiplication).toBe('16');
  });

  it('should return the modulus of 15 % 2 = 1', () => {
    const modulus = operate(15, 2, '%');
    expect(modulus).toBe('1');
  });
});
