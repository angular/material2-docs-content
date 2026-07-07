import * as i0 from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

/**
 * @title Configurable paginator
 */
declare class PaginatorConfigurableExample {
    length: i0.WritableSignal<number>;
    pageSize: i0.WritableSignal<number>;
    pageIndex: i0.WritableSignal<number>;
    pageSizeOptions: i0.WritableSignal<number[]>;
    hidePageSize: i0.WritableSignal<boolean>;
    showPageSizeOptions: i0.WritableSignal<boolean>;
    showFirstLastButtons: i0.WritableSignal<boolean>;
    disabled: i0.WritableSignal<boolean>;
    pageEvent: i0.WritableSignal<PageEvent | undefined>;
    handlePageEvent(e: PageEvent): void;
    setPageSizeOptions(setPageSizeOptionsInput: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorConfigurableExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorConfigurableExample, "paginator-configurable-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Paginator
 */
declare class PaginatorOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorOverviewExample, "paginator-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatPaginatorHarness
 */
declare class PaginatorHarnessExample {
    length: i0.WritableSignal<number>;
    pageSize: i0.WritableSignal<number>;
    pageIndex: i0.WritableSignal<number>;
    pageSizeOptions: i0.WritableSignal<number[]>;
    showFirstLastButtons: i0.WritableSignal<boolean>;
    handlePageEvent(event: PageEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorHarnessExample, "paginator-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Paginator internationalization
 */
declare class PaginatorIntlExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorIntlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorIntlExample, "paginator-intl-example", never, {}, {}, never, never, true, never>;
}

export { PaginatorConfigurableExample, PaginatorHarnessExample, PaginatorIntlExample, PaginatorOverviewExample };
