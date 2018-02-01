/**
 * @title Basic table
 */
export declare class TableBasicExample {
    displayedColumns: string[];
    dataSource: Element[];
}
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
