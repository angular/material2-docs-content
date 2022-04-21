import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Adding and removing data when using an observable-based datasource.
 */
export declare class TableDynamicObservableDataExample {
    displayedColumns: string[];
    dataToDisplay: PeriodicElement[];
    dataSource: ExampleDataSource;
    addData(): void;
    removeData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDynamicObservableDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableDynamicObservableDataExample, "table-dynamic-observable-data-example", never, {}, {}, never, never, false>;
}
declare class ExampleDataSource extends DataSource<PeriodicElement> {
    private _dataStream;
    constructor(initialData: PeriodicElement[]);
    connect(): Observable<PeriodicElement[]>;
    disconnect(): void;
    setData(data: PeriodicElement[]): void;
}
export {};
