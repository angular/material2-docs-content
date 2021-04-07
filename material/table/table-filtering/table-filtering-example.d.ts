import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with filtering
 */
export declare class TableFilteringExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    applyFilter(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFilteringExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFilteringExample, "table-filtering-example", never, {}, {}, never, never>;
}
