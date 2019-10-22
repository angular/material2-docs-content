import { PageEvent } from '@angular/material/paginator';
import * as i0 from "@angular/core";
/**
 * @title Configurable paginator
 */
export declare class PaginatorConfigurableExample {
    length: number;
    pageSize: number;
    pageSizeOptions: number[];
    pageEvent: PageEvent;
    setPageSizeOptions(setPageSizeOptionsInput: string): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<PaginatorConfigurableExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<PaginatorConfigurableExample, "paginator-configurable-example", never, {}, {}, never>;
}
