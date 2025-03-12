import { SelectionChange } from '@angular/material-experimental/selection';
import * as i0 from '@angular/core';
import { SelectionChange as SelectionChange$1 } from '@angular/cdk-experimental/selection';

/**
 * @title Table that uses `matSelectionColumn` which allows users to select rows.
 */
declare class MatSelectionColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    selected: string[];
    selectionChanged(event: SelectionChange<PeriodicElement>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectionColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSelectionColumnExample, "mat-selection-column-example", never, {}, {}, never, never, true, never>;
}
interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

/**
 * @title Mat Selection on a simple list.
 */
declare class MatSelectionListExample {
    data: string[];
    selected1: string[];
    selected2: string[];
    selected3: string[];
    selected4: string[];
    getCurrentSelected(event: SelectionChange$1<string>): string[];
    trackByFn(index: number, value: string): number;
    changeElementName(): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectionListExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSelectionListExample, "mat-selection-list-example", never, {}, {}, never, never, true, never>;
}

export { MatSelectionColumnExample, MatSelectionListExample };
