export interface IFormula {
  isFormula(): Boolean;
  cells(): string[];
}

export class SumFormula implements IFormula {
  formulaString: String = '';

  constructor(formulaString: String) {
    this.formulaString = formulaString;
  }

  isFormula(): Boolean {
    return (
      this.formulaString.startsWith('=SUM(') && this.formulaString.endsWith(')')
    );
  }

  cells(): string[] | [] {
    if (this.isFormula()) {
      const removedStart = this.formulaString.replace('=SUM(', '');
      const removedEnd = removedStart.replace(')', '');
      return removedEnd.split(',').map((value) => value.trim());
    }
    return [];
  }
}

export class SubtractionFormula implements IFormula {
  formulaString: String = '';

  constructor(formulaString: String) {
    this.formulaString = formulaString;
  }

  isFormula(): Boolean {
    return (
      this.formulaString.startsWith('=SUBTRACT(') &&
      this.formulaString.endsWith(')')
    );
  }

  cells(): string[] | [] {
    if (this.isFormula()) {
      const removedStart = this.formulaString.replace('=SUBTRACT(', '');
      const removedEnd = removedStart.replace(')', '');
      return removedEnd.split(',');
    }
    return [];
  }
}
