import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
/** @title Virtual scroll with a custom data source */
export declare class CdkVirtualScrollDataSourceExample {
    ds: MyDataSource;
}
export declare class MyDataSource extends DataSource<string | undefined> {
    private length;
    private pageSize;
    private cachedData;
    private fetchedPages;
    private dataStream;
    private subscription;
    connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]>;
    disconnect(): void;
    private getPageForIndex;
    private fetchPage;
}
