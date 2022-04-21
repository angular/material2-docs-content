import { MatTable } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Adding and removing data when using an array-based datasource.
 */
export declare class TableDynamicArrayDataExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    table: MatTable<PeriodicElement>;
    addData(): void;
    removeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicArrayDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicArrayDataExample, "table-dynamic-array-data-example", never, {}, {}, never, never, false>;
}
