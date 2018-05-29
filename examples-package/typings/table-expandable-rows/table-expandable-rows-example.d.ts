/**
 * @title Table with expandable rows
 */
export declare class TableExpandableRowsExample {
    dataSource: PeriodicElement[];
    columnsToDisplay: string[];
    expandedElement: PeriodicElement;
}
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    description: string;
}
