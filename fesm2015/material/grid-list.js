import { NgForOf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵstyleSanitizer, ɵɵdefaultStyleSanitizer, ɵɵstyleProp, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatGridList, MatGridTile, MatGridListModule } from '@angular/material/grid-list';

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/grid-list/grid-list-dynamic/grid-list-dynamic-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function GridListDynamicExample_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-grid-tile", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const tile_r1 = ctx.$implicit;
    ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
    ɵɵstyleProp("background", tile_r1.color);
    ɵɵproperty("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", tile_r1.text, " ");
} }
/**
 * @record
 */
function Tile() { }
if (false) {
    /** @type {?} */
    Tile.prototype.color;
    /** @type {?} */
    Tile.prototype.cols;
    /** @type {?} */
    Tile.prototype.rows;
    /** @type {?} */
    Tile.prototype.text;
}
/**
 * \@title Dynamic grid-list
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
GridListDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-dynamic-example',
                templateUrl: 'grid-list-dynamic-example.html',
                styleUrls: ['grid-list-dynamic-example.css'],
            },] },
];
/** @nocollapse */ GridListDynamicExample.ɵfac = function GridListDynamicExample_Factory(t) { return new (t || GridListDynamicExample)(); };
/** @nocollapse */ GridListDynamicExample.ɵcmp = ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-grid-list", 0);
        ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 4, "mat-grid-tile", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.tiles);
    } }, directives: [MatGridList, NgForOf, MatGridTile], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridListDynamicExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-dynamic-example',
                templateUrl: 'grid-list-dynamic-example.html',
                styleUrls: ['grid-list-dynamic-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    GridListDynamicExample.prototype.tiles;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/grid-list/grid-list-overview/grid-list-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic grid-list
 */
class GridListOverviewExample {
}
GridListOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-overview-example',
                styleUrls: ['grid-list-overview-example.css'],
                templateUrl: 'grid-list-overview-example.html',
            },] },
];
/** @nocollapse */ GridListOverviewExample.ɵfac = function GridListOverviewExample_Factory(t) { return new (t || GridListOverviewExample)(); };
/** @nocollapse */ GridListOverviewExample.ɵcmp = ɵɵdefineComponent({ type: GridListOverviewExample, selectors: [["grid-list-overview-example"]], decls: 9, vars: 0, consts: [["cols", "2", "rowHeight", "2:1"]], template: function GridListOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-grid-list", 0);
        ɵɵelementStart(1, "mat-grid-tile");
        ɵɵtext(2, "1");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-grid-tile");
        ɵɵtext(4, "2");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-grid-tile");
        ɵɵtext(6, "3");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-grid-tile");
        ɵɵtext(8, "4");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatGridList, MatGridTile], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridListOverviewExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-overview-example',
                styleUrls: ['grid-list-overview-example.css'],
                templateUrl: 'grid-list-overview-example.html',
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/grid-list/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    GridListDynamicExample,
    GridListOverviewExample,
];
class GridListExamplesModule {
}
GridListExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ GridListExamplesModule.ɵmod = ɵɵdefineNgModule({ type: GridListExamplesModule });
/** @nocollapse */ GridListExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); }, imports: [[
            CommonModule,
            MatGridListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
        GridListOverviewExample], imports: [CommonModule,
        MatGridListModule], exports: [GridListDynamicExample,
        GridListOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(GridListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { GridListDynamicExample, GridListExamplesModule, GridListOverviewExample };
//# sourceMappingURL=grid-list.js.map
