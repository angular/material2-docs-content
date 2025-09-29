import * as i0 from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

/** @title Virtual scroll with view recycling disabled. */
declare class CdkVirtualScrollAppendOnlyExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollAppendOnlyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollAppendOnlyExample, "cdk-virtual-scroll-append-only-example", never, {}, {}, never, never, true, never>;
}

/** @title Virtual scroll context variables */
declare class CdkVirtualScrollContextExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollContextExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollContextExample, "cdk-virtual-scroll-context-example", never, {}, {}, never, never, true, never>;
}

/** @title Virtual scroll with a custom strategy */
declare class CdkVirtualScrollCustomStrategyExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollCustomStrategyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollCustomStrategyExample, "cdk-virtual-scroll-custom-strategy-example", never, {}, {}, never, never, true, never>;
}

/** @title Virtual scroll with a custom data source */
declare class CdkVirtualScrollDataSourceExample {
    ds: MyDataSource;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollDataSourceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollDataSourceExample, "cdk-virtual-scroll-data-source-example", never, {}, {}, never, never, true, never>;
}
declare class MyDataSource extends DataSource<string | undefined> {
    private _length;
    private _pageSize;
    private _cachedData;
    private _fetchedPages;
    private readonly _dataStream;
    private readonly _subscription;
    connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]>;
    disconnect(): void;
    private _getPageForIndex;
    private _fetchPage;
}

/** @title Virtual scrolling `<dl>` */
declare class CdkVirtualScrollDlExample {
    states: {
        name: string;
        capital: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollDlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollDlExample, "cdk-virtual-scroll-dl-example", never, {}, {}, never, never, true, never>;
}

/** @title Fixed size virtual scroll with custom buffer parameters */
declare class CdkVirtualScrollFixedBufferExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollFixedBufferExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollFixedBufferExample, "cdk-virtual-scroll-fixed-buffer-example", never, {}, {}, never, never, true, never>;
}

/** @title Horizontal virtual scroll */
declare class CdkVirtualScrollHorizontalExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollHorizontalExample, "cdk-virtual-scroll-horizontal-example", never, {}, {}, never, never, true, never>;
}

/** @title Basic virtual scroll */
declare class CdkVirtualScrollOverviewExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollOverviewExample, "cdk-virtual-scroll-overview-example", never, {}, {}, never, never, true, never>;
}

/** @title Virtual scrolling viewport parent element */
declare class CdkVirtualScrollParentScrollingExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollParentScrollingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollParentScrollingExample, "cdk-virtual-scroll-parent-scrolling-example", never, {}, {}, never, never, true, never>;
}

/** @title Virtual scroll with no template caching */
declare class CdkVirtualScrollTemplateCacheExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollTemplateCacheExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollTemplateCacheExample, "cdk-virtual-scroll-template-cache-example", never, {}, {}, never, never, true, never>;
}

/** @title Virtual scrolling window */
declare class CdkVirtualScrollWindowScrollingExample {
    readonly shouldRun: i0.InputSignal<boolean>;
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollWindowScrollingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollWindowScrollingExample, "cdk-virtual-scroll-window-scrolling-example", never, { "shouldRun": { "alias": "shouldRun"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

export { CdkVirtualScrollAppendOnlyExample, CdkVirtualScrollContextExample, CdkVirtualScrollCustomStrategyExample, CdkVirtualScrollDataSourceExample, CdkVirtualScrollDlExample, CdkVirtualScrollFixedBufferExample, CdkVirtualScrollHorizontalExample, CdkVirtualScrollOverviewExample, CdkVirtualScrollParentScrollingExample, CdkVirtualScrollTemplateCacheExample, CdkVirtualScrollWindowScrollingExample };
