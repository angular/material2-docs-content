import * as i0 from '@angular/core';
import * as i4 from '@angular/common';
import * as i5 from '@angular/material/grid-list';

/**
 * @title Dynamic grid-list
 */
export declare class GridListDynamicExample {
    tiles: Tile[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListDynamicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListDynamicExample, "grid-list-dynamic-example", never, {}, {}, never, never, false>;
}

export declare class GridListExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GridListExamplesModule, [typeof i1.GridListDynamicExample, typeof i2.GridListHarnessExample, typeof i3.GridListOverviewExample], [typeof i4.CommonModule, typeof i5.MatGridListModule], [typeof i1.GridListDynamicExample, typeof i2.GridListHarnessExample, typeof i3.GridListOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GridListExamplesModule>;
}

/**
 * @title Testing with MatGridListHarness
 */
export declare class GridListHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListHarnessExample, "grid-list-harness-example", never, {}, {}, never, never, false>;
}

/**
 * @title Basic grid-list
 */
export declare class GridListOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListOverviewExample, "grid-list-overview-example", never, {}, {}, never, never, false>;
}

declare namespace i1 {
    export {
        Tile,
        GridListDynamicExample
    }
}

declare namespace i2 {
    export {
        GridListHarnessExample
    }
}

declare namespace i3 {
    export {
        GridListOverviewExample
    }
}

declare interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}

export { }
