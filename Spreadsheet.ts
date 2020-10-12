import {Cell, ICell} from './Cell';
import {SumFormula} from './Formula';

export class Spreadsheet {
  cells: ICell[][] = new Array<ICell[]>();

  constructor() {
    for (var i = 0; i < 26; i++) {
      const row: ICell[] = new Array<ICell>();
      for (var j = 1; j <= 10; j++) {
        const cell = new Cell(`${String.fromCharCode(65 + i)}${j}`, '');
        row.push(cell);
      }
      this.cells.push(row);
    }
  }

  getCells(): ICell[][] {
    return this.cells;
  }

  getCell(id: string): ICell {
    const character = id.charAt(0);
    const column = this.getColumn(character);
    const row = Number(id.slice(1, id.length));
    return this.cells[column][row - 1];
  }

  private getColumn(letter: string) {
    for (let i = 0; i < 26; i++) {
      if (String.fromCharCode(65 + i) === letter) {
        return i;
      }
    }

    return 0;
  }

  setCell(id: string, value: string) {
    const character = id.charAt(0);
    const column = this.getColumn(character);
    const row = Number(id.slice(1, id.length)) - 1;
    console.log(this.cells[column][row].id);

    const formula = new SumFormula(value);

    if (formula.isFormula()) {
      this.cells[column][row].formula = value;
      const cells = formula.cells();
      var accumulator = 0;
      console.log(cells);
      cells.forEach((element) => {
        console.log(element);
        try {
          const cellValue = Number(this.getCell(element).value) || 0;
          console.log(cellValue);
          accumulator += cellValue;
        } catch {
          this.cells[column][row].value = '#ERROR';
        }
      });
      this.cells[column][row].value = String(accumulator);
    } else {
      this.cells[column][row].value = value;
    }
  }

  columns(): number {
    return this.cells.length;
  }

  rows(): number {
    return this.cells[0].length;
  }
}
