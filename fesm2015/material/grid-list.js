import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/grid-list';
import { MatGridListModule } from '@angular/material/grid-list';

function GridListDynamicExample_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-grid-tile", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tile_r1 = ctx.$implicit;
    i0.ɵɵstyleProp("background", tile_r1.color);
    i0.ɵɵproperty("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tile_r1.text, " ");
} }
/**
 * @title Dynamic grid-list
 */
class GridListDynamicExample {
    constructor() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
}
GridListDynamicExample.ɵfac = function GridListDynamicExample_Factory(t) { return new (t || GridListDynamicExample)(); };
GridListDynamicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-grid-list", 0);
        i0.ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 5, "mat-grid-tile", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tiles);
    } }, directives: [i1.MatGridList, i2.NgForOf, i1.MatGridTile], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridListDynamicExample, [{
        type: Component,
        args: [{ selector: 'grid-list-dynamic-example', template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
    }], null, null); })();

/**
 * @title Basic grid-list
 */
class GridListOverviewExample {
}
GridListOverviewExample.ɵfac = function GridListOverviewExample_Factory(t) { return new (t || GridListOverviewExample)(); };
GridListOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridListOverviewExample, selectors: [["grid-list-overview-example"]], decls: 9, vars: 0, consts: [["cols", "2", "rowHeight", "2:1"]], template: function GridListOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-grid-list", 0);
        i0.ɵɵelementStart(1, "mat-grid-tile");
        i0.ɵɵtext(2, "1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-grid-tile");
        i0.ɵɵtext(4, "2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-grid-tile");
        i0.ɵɵtext(6, "3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-grid-tile");
        i0.ɵɵtext(8, "4");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatGridList, i1.MatGridTile], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridListOverviewExample, [{
        type: Component,
        args: [{ selector: 'grid-list-overview-example', template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n", styles: ["mat-grid-tile {\n  background: lightblue;\n}\n"] }]
    }], null, null); })();

/**
 * @title Testing with MatGridListHarness
 */
class GridListHarnessExample {
}
GridListHarnessExample.ɵfac = function GridListHarnessExample_Factory(t) { return new (t || GridListHarnessExample)(); };
GridListHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridListHarnessExample, selectors: [["grid-list-harness-example"]], decls: 14, vars: 0, consts: [["cols", "2", "rowHeight", "100px"], ["colspan", "2"]], template: function GridListHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-grid-list", 0);
        i0.ɵɵelementStart(1, "mat-grid-tile");
        i0.ɵɵtext(2, "Tile 1 (no header, no footer)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-grid-tile");
        i0.ɵɵelementStart(4, "mat-grid-tile-header");
        i0.ɵɵtext(5, "Tile 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-grid-tile", 1);
        i0.ɵɵelementStart(7, "mat-grid-tile-header");
        i0.ɵɵtext(8, "Tile 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-grid-tile-footer");
        i0.ɵɵtext(10, "Tile 3 footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-grid-tile");
        i0.ɵɵelementStart(12, "mat-grid-tile-header");
        i0.ɵɵtext(13, "Tile 4");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatGridList, i1.MatGridTile, i1.MatGridTileText, i1.MatGridTileHeaderCssMatStyler, i1.MatGridTileFooterCssMatStyler], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridListHarnessExample, [{
        type: Component,
        args: [{ selector: 'grid-list-harness-example', template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
    }], null, null); })();

const EXAMPLES = [
    GridListDynamicExample,
    GridListHarnessExample,
    GridListOverviewExample,
];
class GridListExamplesModule {
}
GridListExamplesModule.ɵfac = function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); };
GridListExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GridListExamplesModule });
GridListExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatGridListModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
        GridListHarnessExample,
        GridListOverviewExample], imports: [CommonModule,
        MatGridListModule], exports: [GridListDynamicExample,
        GridListHarnessExample,
        GridListOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { GridListDynamicExample, GridListExamplesModule, GridListHarnessExample, GridListOverviewExample };
//# sourceMappingURL=grid-list.js.map
