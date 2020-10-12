import {expect} from 'chai';
import {SumFormula, IFormula} from '../Formula';

describe('Formula', () => {
  it('should be a formula if comma seperated values', () => {
    const formula: IFormula = new SumFormula('=SUM(A1, A2, A3)');
    expect(formula.isFormula()).equal(true);
  });

  it('should sum the values', () => {
    const formula: IFormula = new SumFormula('=SUM(A1, A2, A3)');
    expect(formula.isFormula()).equal(true);
  });
});
