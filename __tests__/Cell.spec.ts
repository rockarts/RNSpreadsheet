import {expect} from 'chai';
import {Cell, ICell} from '../Cell';

describe('Cell', () => {
  it('should create a cell', () => {
    const result: ICell = new Cell('A1', '');
    expect(result).to.be.a('object');
    expect(result.id).equal('A1');
    expect(result.value).equal('');
  });

  it('should set cell', () => {
    const cell = new Cell('A2', '22');
    cell.setCell('A2', '25');

    expect(cell.getValue()).equal('25');
  });

  // it('should have an empty forumla', () => {
  //   const cell = new Cell('A2', '22');
  //   expect(cell.getFormula()).equal(null);
  // });

  // it('should sum using formula', () => {
  //   const a1 = new Cell('A1', '1');
  //   const a2 = new Cell('A2', '2');
  //   const a3 = new Cell('A2', '=SUM(A1, A2)');

  //   const value = a3.getValue();
  //   expect(value).equal('3');
  //   // let cell = s.getCell("A2");
  //   // assertEquals(null, cell.getFormula());
  //   // assertEquals("22", cell.getValue());
  //   // assertEquals("A2", cell.getId());
  //   // assertEquals(1, cell.getRow());
  //   // assertEquals(0, cell.getColumn());
  //   //Requirements
  //   /* - The only operations that need to be supported when using
  //   formulas are addition and subtraction.
  //     - The only available operands for formulas
  //   should be references to specific cells (no need to support ranges),
  //   and numbers.
  //   */
  //   //1000 Rows
  //   //26 Columns A-Z
  // });
});
