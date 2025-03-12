import * as i0 from '@angular/core';

interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}
/**
 * @title Dynamic grid-list
 */
declare class GridListDynamicExample {
    tiles: Tile[];
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListDynamicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListDynamicExample, "grid-list-dynamic-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Basic grid-list
 */
declare class GridListOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListOverviewExample, "grid-list-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatGridListHarness
 */
declare class GridListHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListHarnessExample, "grid-list-harness-example", never, {}, {}, never, never, true, never>;
}

export { GridListDynamicExample, GridListHarnessExample, GridListOverviewExample };
