import * as i0 from "@angular/core";
interface Transaction {
    item: string;
    cost: number;
}
/**
 * @title Table with multiple header and footer rows
 */
export declare class TableMultipleHeaderFooterExample {
    displayedColumns: string[];
    transactions: Transaction[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableMultipleHeaderFooterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableMultipleHeaderFooterExample, "table-multiple-header-footer-example", never, {}, {}, never, never, false>;
}
export {};
