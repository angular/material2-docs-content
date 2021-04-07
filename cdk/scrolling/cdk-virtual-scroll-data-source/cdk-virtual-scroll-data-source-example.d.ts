import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/** @title Virtual scroll with a custom data source */
export declare class CdkVirtualScrollDataSourceExample {
    ds: MyDataSource;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollDataSourceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollDataSourceExample, "cdk-virtual-scroll-data-source-example", never, {}, {}, never, never>;
}
export declare class MyDataSource extends DataSource<string | undefined> {
    private _length;
    private _pageSize;
    private _cachedData;
    private _fetchedPages;
    private _dataStream;
    private _subscription;
    connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]>;
    disconnect(): void;
    private _getPageForIndex;
    private _fetchPage;
}
