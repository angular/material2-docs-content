import * as i0 from '@angular/core';

/**
 * @title Default-enabled column resize with a table-based mat-table.
 */
export declare class DefaultEnabledColumnResizeExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultEnabledColumnResizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultEnabledColumnResizeExample, "default-enabled-column-resize-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Default-enabled column resize with a flex-based mat-table.
 */
export declare class DefaultEnabledColumnResizeFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_2[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultEnabledColumnResizeFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultEnabledColumnResizeFlexExample, "default-enabled-column-resize-flex-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Opt-in column resize with a table-based mat-table.
 */
export declare class OptInColumnResizeExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_3[];
    static ɵfac: i0.ɵɵFactoryDeclaration<OptInColumnResizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OptInColumnResizeExample, "opt-in-column-resize-example", never, {}, {}, never, never, true, never>;
}

declare interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_2 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

declare interface PeriodicElement_3 {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export { }
