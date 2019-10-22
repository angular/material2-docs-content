import * as i0 from "@angular/core";
export interface Transaction {
    item: string;
    cost: number;
}
/**
 * @title Footer row table
 */
export declare class TableFooterRowExample {
    displayedColumns: string[];
    transactions: Transaction[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ngFactoryDef: i0.ɵɵFactoryDef<TableFooterRowExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<TableFooterRowExample, "table-footer-row-example", never, {}, {}, never>;
}
