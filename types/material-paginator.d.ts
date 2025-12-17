import { PageEvent } from '@angular/material/paginator';
import * as i0 from '@angular/core';

/**
 * @title Configurable paginator
 */
declare class PaginatorConfigurableExample {
    length: number;
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: number[];
    hidePageSize: boolean;
    showPageSizeOptions: boolean;
    showFirstLastButtons: boolean;
    disabled: boolean;
    pageEvent: PageEvent | undefined;
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
    length: number;
    pageSize: number;
    pageIndex: number;
    pageSizeOptions: number[];
    showFirstLastButtons: boolean;
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
