import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
export declare class MyCustomPaginatorIntl implements MatPaginatorIntl {
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
 * @title Paginator internationalization
 */
export declare class PaginatorIntlExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorIntlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginatorIntlExample, "paginator-intl-example", never, {}, {}, never, never>;
}
export declare class PaginatorIntlExampleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginatorIntlExampleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PaginatorIntlExampleModule, [typeof PaginatorIntlExample], [typeof i1.MatPaginatorModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PaginatorIntlExampleModule>;
}
