import * as i0 from "@angular/core";
/**
 * @title Table with expandable rows
 */
export declare class TableExpandableRowsExample {
    dataSource: PeriodicElement[];
    columnsToDisplay: string[];
    expandedElement: PeriodicElement | null;
    static ɵfac: i0.ɵɵFactoryDef<TableExpandableRowsExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableExpandableRowsExample, "table-expandable-rows-example", never, {}, {}, never>;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}
