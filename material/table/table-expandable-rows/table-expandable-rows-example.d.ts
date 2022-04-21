import * as i0 from "@angular/core";
/**
 * @title Table with expandable rows
 */
export declare class TableExpandableRowsExample {
    dataSource: PeriodicElement[];
    columnsToDisplay: string[];
    columnsToDisplayWithExpand: string[];
    expandedElement: PeriodicElement | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableExpandableRowsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableExpandableRowsExample, "table-expandable-rows-example", never, {}, {}, never, never, false>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}
