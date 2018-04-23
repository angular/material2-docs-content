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
}
