import * as i0 from '@angular/core';
import * as i11 from '@angular/forms';
import * as i4 from '@angular/common';
import * as i5 from '@angular/material/input';
import * as i6 from '@angular/material/paginator';
import * as i7 from '@angular/material/card';
import * as i8 from '@angular/material/form-field';
import * as i9 from '@angular/material/slide-toggle';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';

declare namespace i1 {
    export {
        PaginatorConfigurableExample
    }
}

declare namespace i10 {
    export {
        MyCustomPaginatorIntl,
        PaginatorIntlExample,
        PaginatorIntlExampleModule
    }
}

declare namespace i2 {
    export {
        PaginatorHarnessExample
    }
}

declare namespace i3 {
    export {
        PaginatorOverviewExample
    }
}

declare class MyCustomPaginatorIntl implements MatPaginatorIntl {
    changes: Subject<void>;
    firstPageLabel: any;
    itemsPerPageLabel: any;
    lastPageLabel: any;
    nextPageLabel: string;
    previousPageLabel: string;
    getRangeLabel(page: number, pageSize: number, length: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyCustomPaginatorIntl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MyCustomPaginatorIntl>;
}

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
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorConfigurableExample, "paginator-configurable-example", never, {}, {}, never, never, false, never>;
}

export declare class PaginatorExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PaginatorExamplesModule, [typeof i1.PaginatorConfigurableExample, typeof i2.PaginatorHarnessExample, typeof i3.PaginatorOverviewExample], [typeof i4.CommonModule, typeof i5.MatInputModule, typeof i6.MatPaginatorModule, typeof i7.MatCardModule, typeof i8.MatFormFieldModule, typeof i5.MatInputModule, typeof i9.MatSlideToggleModule, typeof i10.PaginatorIntlExampleModule, typeof i11.FormsModule], [typeof i1.PaginatorConfigurableExample, typeof i2.PaginatorHarnessExample, typeof i3.PaginatorOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PaginatorExamplesModule>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorHarnessExample, "paginator-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Paginator internationalization
 */
export declare class PaginatorIntlExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorIntlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorIntlExample, "paginator-intl-example", never, {}, {}, never, never, false, never>;
}

declare class PaginatorIntlExampleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorIntlExampleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PaginatorIntlExampleModule, [typeof PaginatorIntlExample], [typeof i6.MatPaginatorModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PaginatorIntlExampleModule>;
}

/**
 * @title Paginator
 */
export declare class PaginatorOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorOverviewExample, "paginator-overview-example", never, {}, {}, never, never, false, never>;
}

export { }
