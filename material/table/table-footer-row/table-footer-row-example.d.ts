import * as i0 from "@angular/core";
interface Transaction {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFooterRowExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFooterRowExample, "table-footer-row-example", never, {}, {}, never, never, false>;
}
export {};
