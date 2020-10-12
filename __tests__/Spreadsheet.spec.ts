import {expect} from 'chai';
import {ICell} from '../Cell';
import {Spreadsheet} from '../Spreadsheet';

describe('Spreadsheet', () => {
  it('should create a spreadsheet', () => {
    const result = new Spreadsheet();
    expect(result).to.be.a('object');
    //console.log(JSON.stringify(result));
  });

  it('should have 26 columns', () => {
    const result = new Spreadsheet();
    expect(result.columns()).equal(26);
  });

  it('should get and set cell by id', () => {
    const spreadsheet = new Spreadsheet();
    spreadsheet.setCell('A5', '5');
    const cell: ICell = spreadsheet.getCell('A5');
    expect(cell.id).equal('A5');
    expect(cell.value).equal('5');
  });

  it('should get and set cell Z10 by id', () => {
    const spreadsheet = new Spreadsheet();
    spreadsheet.setCell('Z10', '19');
    const cell: ICell = spreadsheet.getCell('Z10');
    expect(cell.id).equal('Z10');
    expect(cell.value).equal('19');
  });

  it('should set cell B2 by id using formula', () => {
    const spreadsheet = new Spreadsheet();
    spreadsheet.setCell('B2', '=SUM(A1, A2)');
    const cell: ICell = spreadsheet.getCell('B2');
    expect(cell.id).equal('B2');
    expect(cell.formula).equal('=SUM(A1, A2)');
  });

  it('should set cell B2 by id using formula and sum', () => {
    const spreadsheet = new Spreadsheet();
    spreadsheet.setCell('A1', '1');
    spreadsheet.setCell('A2', '2');
    spreadsheet.setCell('A3', '3');
    spreadsheet.setCell('B2', '=SUM(A1, A2, A3)');
    const cell: ICell = spreadsheet.getCell('B2');
    expect(cell.id).equal('B2');
    expect(cell.formula).equal('=SUM(A1, A2, A3)');
    expect(cell.value).equal('6');
  });
});
