import { Transaction } from '../table-footer-row/table-footer-row-example';
export interface Transaction {
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
}
