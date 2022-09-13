import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/collections';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import * as i0 from '@angular/core';
import * as i12 from '@angular/common';
import * as i13 from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';

export declare class CdkScrollingExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkScrollingExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkScrollingExamplesModule, [typeof i1.CdkVirtualScrollAppendOnlyExample, typeof i2.CdkVirtualScrollContextExample, typeof i3.CdkVirtualScrollCustomStrategyExample, typeof i4.CdkVirtualScrollDataSourceExample, typeof i5.CdkVirtualScrollDlExample, typeof i6.CdkVirtualScrollFixedBufferExample, typeof i7.CdkVirtualScrollHorizontalExample, typeof i8.CdkVirtualScrollOverviewExample, typeof i9.CdkVirtualScrollTemplateCacheExample, typeof i10.CdkVirtualScrollParentScrollingExample, typeof i11.CdkVirtualScrollWindowScrollingExample], [typeof i12.CommonModule, typeof i13.ScrollingModule], [typeof i1.CdkVirtualScrollAppendOnlyExample, typeof i2.CdkVirtualScrollContextExample, typeof i3.CdkVirtualScrollCustomStrategyExample, typeof i4.CdkVirtualScrollDataSourceExample, typeof i5.CdkVirtualScrollDlExample, typeof i6.CdkVirtualScrollFixedBufferExample, typeof i7.CdkVirtualScrollHorizontalExample, typeof i8.CdkVirtualScrollOverviewExample, typeof i9.CdkVirtualScrollTemplateCacheExample, typeof i10.CdkVirtualScrollParentScrollingExample, typeof i11.CdkVirtualScrollWindowScrollingExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkScrollingExamplesModule>;
}

/** @title Virtual scroll with view recycling disabled. */
export declare class CdkVirtualScrollAppendOnlyExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollAppendOnlyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollAppendOnlyExample, "cdk-virtual-scroll-append-only-example", never, {}, {}, never, never, false, never>;
}

/** @title Virtual scroll context variables */
export declare class CdkVirtualScrollContextExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollContextExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollContextExample, "cdk-virtual-scroll-context-example", never, {}, {}, never, never, false, never>;
}

/** @title Virtual scroll with a custom strategy */
export declare class CdkVirtualScrollCustomStrategyExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollCustomStrategyExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollCustomStrategyExample, "cdk-virtual-scroll-custom-strategy-example", never, {}, {}, never, never, false, never>;
}

/** @title Virtual scroll with a custom data source */
export declare class CdkVirtualScrollDataSourceExample {
    ds: MyDataSource;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollDataSourceExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollDataSourceExample, "cdk-virtual-scroll-data-source-example", never, {}, {}, never, never, false, never>;
}

/** @title Virtual scrolling `<dl>` */
export declare class CdkVirtualScrollDlExample {
    states: {
        name: string;
        capital: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollDlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollDlExample, "cdk-virtual-scroll-dl-example", never, {}, {}, never, never, false, never>;
}

/** @title Fixed size virtual scroll with custom buffer parameters */
export declare class CdkVirtualScrollFixedBufferExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollFixedBufferExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollFixedBufferExample, "cdk-virtual-scroll-fixed-buffer-example", never, {}, {}, never, never, false, never>;
}

/** @title Horizontal virtual scroll */
export declare class CdkVirtualScrollHorizontalExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollHorizontalExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollHorizontalExample, "cdk-virtual-scroll-horizontal-example", never, {}, {}, never, never, false, never>;
}

/** @title Basic virtual scroll */
export declare class CdkVirtualScrollOverviewExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollOverviewExample, "cdk-virtual-scroll-overview-example", never, {}, {}, never, never, false, never>;
}

/** @title Virtual scrolling viewport parent element */
export declare class CdkVirtualScrollParentScrollingExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollParentScrollingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollParentScrollingExample, "cdk-virtual-scroll-parent-scrolling-example", never, {}, {}, never, never, false, never>;
}

/** @title Virtual scroll with no template caching */
export declare class CdkVirtualScrollTemplateCacheExample {
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollTemplateCacheExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollTemplateCacheExample, "cdk-virtual-scroll-template-cache-example", never, {}, {}, never, never, false, never>;
}

/** @title Virtual scrolling window */
export declare class CdkVirtualScrollWindowScrollingExample {
    shouldRun: boolean;
    items: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkVirtualScrollWindowScrollingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkVirtualScrollWindowScrollingExample, "cdk-virtual-scroll-window-scrolling-example", never, { "shouldRun": "shouldRun"; }, {}, never, never, false, never>;
}

declare class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor();
}

declare namespace i1 {
    export {
        CdkVirtualScrollAppendOnlyExample
    }
}

declare namespace i10 {
    export {
        CdkVirtualScrollParentScrollingExample
    }
}

declare namespace i11 {
    export {
        CdkVirtualScrollWindowScrollingExample
    }
}

declare namespace i2 {
    export {
        CdkVirtualScrollContextExample
    }
}

declare namespace i3 {
    export {
        CustomVirtualScrollStrategy,
        CdkVirtualScrollCustomStrategyExample
    }
}

declare namespace i4 {
    export {
        CdkVirtualScrollDataSourceExample,
        MyDataSource
    }
}

declare namespace i5 {
    export {
        CdkVirtualScrollDlExample
    }
}

declare namespace i6 {
    export {
        CdkVirtualScrollFixedBufferExample
    }
}

declare namespace i7 {
    export {
        CdkVirtualScrollHorizontalExample
    }
}

declare namespace i8 {
    export {
        CdkVirtualScrollOverviewExample
    }
}

declare namespace i9 {
    export {
        CdkVirtualScrollTemplateCacheExample
    }
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

export { }
