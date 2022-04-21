import { PageEvent } from '@angular/material/paginator';
import * as i0 from "@angular/core";
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
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorHarnessExample, "paginator-harness-example", never, {}, {}, never, never, false>;
}
