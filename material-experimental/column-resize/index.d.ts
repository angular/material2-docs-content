import * as i0 from '@angular/core';
import * as i2 from '@angular/material-experimental/column-resize';
import * as i3 from '@angular/material/table';

export declare class ColumnResizeExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnResizeExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColumnResizeExamplesModule, never, never, [typeof i1_4.DefaultEnabledColumnResizeExampleModule, typeof i2_2.DefaultEnabledColumnResizeFlexExampleModule, typeof i3_2.OptInColumnResizeExampleModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColumnResizeExamplesModule>;
}

/**
 * @title Default-enabled column resize with a table-based mat-table.
 */
export declare class DefaultEnabledColumnResizeExample {
    displayedColumns: string[];
    dataSource: PeriodicElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultEnabledColumnResizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultEnabledColumnResizeExample, "default-enabled-column-resize-example", never, {}, {}, never, never, false, never>;
}

export declare class DefaultEnabledColumnResizeExampleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultEnabledColumnResizeExampleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DefaultEnabledColumnResizeExampleModule, [typeof i1.DefaultEnabledColumnResizeExample], [typeof i2.MatDefaultEnabledColumnResizeModule, typeof i3.MatTableModule], [typeof i1.DefaultEnabledColumnResizeExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DefaultEnabledColumnResizeExampleModule>;
}

/**
 * @title Default-enabled column resize with a flex-based mat-table.
 */
export declare class DefaultEnabledColumnResizeFlexExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_2[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultEnabledColumnResizeFlexExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultEnabledColumnResizeFlexExample, "default-enabled-column-resize-flex-example", never, {}, {}, never, never, false, never>;
}

export declare class DefaultEnabledColumnResizeFlexExampleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultEnabledColumnResizeFlexExampleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DefaultEnabledColumnResizeFlexExampleModule, [typeof i1_2.DefaultEnabledColumnResizeFlexExample], [typeof i2.MatDefaultEnabledColumnResizeModule, typeof i3.MatTableModule], [typeof i1_2.DefaultEnabledColumnResizeFlexExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DefaultEnabledColumnResizeFlexExampleModule>;
}

declare namespace i1 {
    export {
        PeriodicElement,
        DefaultEnabledColumnResizeExample
    }
}

declare namespace i1_2 {
    export {
        PeriodicElement_2 as PeriodicElement,
        DefaultEnabledColumnResizeFlexExample
    }
}

declare namespace i1_3 {
    export {
        PeriodicElement_3 as PeriodicElement,
        OptInColumnResizeExample
    }
}

declare namespace i1_4 {
    export {
        DefaultEnabledColumnResizeExampleModule
    }
}

declare namespace i2_2 {
    export {
        DefaultEnabledColumnResizeFlexExampleModule
    }
}

declare namespace i3_2 {
    export {
        OptInColumnResizeExampleModule
    }
}

/**
 * @title Opt-in column resize with a table-based mat-table.
 */
export declare class OptInColumnResizeExample {
    displayedColumns: string[];
    dataSource: PeriodicElement_3[];
    static ɵfac: i0.ɵɵFactoryDeclaration<OptInColumnResizeExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OptInColumnResizeExample, "opt-in-column-resize-example", never, {}, {}, never, never, false, never>;
}

export declare class OptInColumnResizeExampleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<OptInColumnResizeExampleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<OptInColumnResizeExampleModule, [typeof i1_3.OptInColumnResizeExample], [typeof i2.MatColumnResizeModule, typeof i3.MatTableModule], [typeof i1_3.OptInColumnResizeExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<OptInColumnResizeExampleModule>;
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
