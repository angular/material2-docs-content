import { SelectionChange } from '@angular/material-experimental/selection';
import * as i0 from "@angular/core";
/**
 * @title Table that uses `matSelectionColumn` which allows users to select rows.
 */
export declare class MatSelectionColumnExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    selected: string[];
    selectionChanged(event: SelectionChange<PeriodicElement>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectionColumnExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatSelectionColumnExample, "mat-selection-column-example", never, {}, {}, never, never>;
}
interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export {};
