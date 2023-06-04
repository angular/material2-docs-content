import * as i0 from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

/**
 * @title Configurable paginator
 */
export declare class PaginatorConfigurableExample {
    length: number;
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: number[];
    hidePageSize: boolean;
    showPageSizeOptions: boolean;
    showFirstLastButtons: boolean;
    disabled: boolean;
    pageEvent: PageEvent;
    handlePageEvent(e: PageEvent): void;
    setPageSizeOptions(setPageSizeOptionsInput: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorConfigurableExample, "paginator-configurable-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Testing with MatPaginatorHarness
 */
export declare class PaginatorHarnessExample {
    length: number;
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: number[];
    showFirstLastButtons: boolean;
    handlePageEvent(event: PageEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorHarnessExample, "paginator-harness-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Paginator internationalization
 */
export declare class PaginatorIntlExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorIntlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorIntlExample, "paginator-intl-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Paginator
 */
export declare class PaginatorOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorOverviewExample, "paginator-overview-example", never, {}, {}, never, never, true, never, false>;
}

export { }
