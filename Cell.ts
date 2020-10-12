import {IFormula} from './Formula';

export interface ICell {
  id: string;
  value: string | number;
  formula: any;
  setCell(id: string, value: any): void;
}

export class Cell implements ICell {
  id: string;
  value: string | number;
  formula: IFormula | null;

  constructor(id: string, value: string | number) {
    this.id = id;
    this.value = value;
    this.formula = null;
  }

  setCell(id: string, value: any) {
    this.id = id;
    this.value = value;
  }

  getValue() {
    return this.value;
  }
  getFormula() {
    return this.formula;
  }
}
