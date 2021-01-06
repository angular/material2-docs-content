(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/grid-list')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/grid-list', ['exports', '@angular/common', '@angular/core', '@angular/material/grid-list'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.gridList = {}), global.ng.common, global.ng.core, global.ng.material.gridList));
}(this, (function (exports, i2, i0, i1) { 'use strict';

    function GridListDynamicExample_mat_grid_tile_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-grid-tile", 2);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tile_r1 = ctx.$implicit;
            i0.ɵɵstyleProp("background", tile_r1.color);
            i0.ɵɵproperty("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", tile_r1.text, " ");
        }
    }
    /**
     * @title Dynamic grid-list
     */
    var GridListDynamicExample = /** @class */ (function () {
        function GridListDynamicExample() {
            this.tiles = [
                { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
                { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
                { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
                { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
            ];
        }
        return GridListDynamicExample;
    }());
    GridListDynamicExample.ɵfac = function GridListDynamicExample_Factory(t) { return new (t || GridListDynamicExample)(); };
    GridListDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-grid-list", 0);
                i0.ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 5, "mat-grid-tile", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.tiles);
            }
        }, directives: [i1.MatGridList, i2.NgForOf, i1.MatGridTile], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridListDynamicExample, [{
                type: i0.Component,
                args: [{
                        selector: 'grid-list-dynamic-example',
                        templateUrl: 'grid-list-dynamic-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Basic grid-list
     */
    var GridListOverviewExample = /** @class */ (function () {
        function GridListOverviewExample() {
        }
        return GridListOverviewExample;
    }());
    GridListOverviewExample.ɵfac = function GridListOverviewExample_Factory(t) { return new (t || GridListOverviewExample)(); };
    GridListOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: GridListOverviewExample, selectors: [["grid-list-overview-example"]], decls: 9, vars: 0, consts: [["cols", "2", "rowHeight", "2:1"]], template: function GridListOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
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
            }
        }, directives: [i1.MatGridList, i1.MatGridTile], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridListOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'grid-list-overview-example',
                        styleUrls: ['grid-list-overview-example.css'],
                        templateUrl: 'grid-list-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatGridListHarness
     */
    var GridListHarnessExample = /** @class */ (function () {
        function GridListHarnessExample() {
        }
        return GridListHarnessExample;
    }());
    GridListHarnessExample.ɵfac = function GridListHarnessExample_Factory(t) { return new (t || GridListHarnessExample)(); };
    GridListHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: GridListHarnessExample, selectors: [["grid-list-harness-example"]], decls: 14, vars: 0, consts: [["cols", "2", "rowHeight", "100px"], ["colspan", "2"]], template: function GridListHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
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
            }
        }, directives: [i1.MatGridList, i1.MatGridTile, i1.MatGridTileText, i1.MatGridTileHeaderCssMatStyler, i1.MatGridTileFooterCssMatStyler], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridListHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'grid-list-harness-example',
                        templateUrl: 'grid-list-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        GridListDynamicExample,
        GridListHarnessExample,
        GridListOverviewExample,
    ];
    var GridListExamplesModule = /** @class */ (function () {
        function GridListExamplesModule() {
        }
        return GridListExamplesModule;
    }());
    GridListExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: GridListExamplesModule });
    GridListExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); }, imports: [[
                i2.CommonModule,
                i1.MatGridListModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
                GridListHarnessExample,
                GridListOverviewExample], imports: [i2.CommonModule,
                i1.MatGridListModule], exports: [GridListDynamicExample,
                GridListHarnessExample,
                GridListOverviewExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GridListExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.CommonModule,
                            i1.MatGridListModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GridListDynamicExample = GridListDynamicExample;
    exports.GridListExamplesModule = GridListExamplesModule;
    exports.GridListHarnessExample = GridListHarnessExample;
    exports.GridListOverviewExample = GridListOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-grid-list.umd.js.map
