import * as i0 from "@angular/core";
export interface Transaction {
    item: string;
    cost: number;
}
/**
 * @title Table with a sticky footer
 */
export declare class TableStickyFooterExample {
    displayedColumns: string[];
    transactions: Transaction[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ngFactoryDef: i0.ɵɵFactoryDef<TableStickyFooterExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<TableStickyFooterExample, "table-sticky-footer-example", never, {}, {}, never>;
}
