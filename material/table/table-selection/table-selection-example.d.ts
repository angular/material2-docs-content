import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with selection
 */
export declare class TableSelectionExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    selection: SelectionModel<PeriodicElement>;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSelectionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableSelectionExample, "table-selection-example", never, {}, {}, never, never>;
}
