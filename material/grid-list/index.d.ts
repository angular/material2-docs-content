import * as i0 from '@angular/core';

/**
 * @title Dynamic grid-list
 */
export declare class GridListDynamicExample {
    tiles: Tile[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListDynamicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListDynamicExample, "grid-list-dynamic-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Testing with MatGridListHarness
 */
export declare class GridListHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListHarnessExample, "grid-list-harness-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Basic grid-list
 */
export declare class GridListOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListOverviewExample, "grid-list-overview-example", never, {}, {}, never, never, true, never, false>;
}

declare interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}

export { }
