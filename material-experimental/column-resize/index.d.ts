import * as i0 from '@angular/core';

interface PeriodicElement$2 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Default-enabled column resize with a table-based mat-table.
 */
declare class DefaultEnabledColumnResizeExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$2[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultEnabledColumnResizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultEnabledColumnResizeExample, "default-enabled-column-resize-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement$1 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Default-enabled column resize with a flex-based mat-table.
 */
declare class DefaultEnabledColumnResizeFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement$1[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultEnabledColumnResizeFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultEnabledColumnResizeFlexExample, "default-enabled-column-resize-flex-example", never, {}, {}, never, never, true, never>;
}

interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Opt-in column resize with a table-based mat-table.
 */
declare class OptInColumnResizeExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<OptInColumnResizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OptInColumnResizeExample, "opt-in-column-resize-example", never, {}, {}, never, never, true, never>;
}

export { DefaultEnabledColumnResizeExample, DefaultEnabledColumnResizeFlexExample, OptInColumnResizeExample };
