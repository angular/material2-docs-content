import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
export declare class TableGeneratedColumnsExample {
    columns: {
        columnDef: string;
        header: string;
        cell: (element: PeriodicElement) => string;
    }[];
    dataSource: PeriodicElement[];
    displayedColumns: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableGeneratedColumnsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableGeneratedColumnsExample, "table-generated-columns-example", never, {}, {}, never, never>;
}
