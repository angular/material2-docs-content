import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export declare class TableBasicExample {
    displayedColumns: string[];
    dataSource: ExampleDataSource;
}
export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export declare class ExampleDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Element[]>;
    disconnect(): void;
}
