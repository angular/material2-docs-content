(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/material/grid-list')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/grid-list', ['exports', '@angular/common', '@angular/core', '@angular/material/grid-list'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.gridList = {}), global.ng.common, global.ng.core, global.ng.material.gridList));
}(this, (function (exports, i2, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    function GridListDynamicExample_mat_grid_tile_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-grid-tile", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tile_r1 = ctx.$implicit;
            i0__namespace.ɵɵstyleProp("background", tile_r1.color);
            i0__namespace.ɵɵproperty("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", tile_r1.text, " ");
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
    GridListDynamicExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-grid-list", 0);
                i0__namespace.ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 5, "mat-grid-tile", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.tiles);
            }
        }, directives: [i1__namespace.MatGridList, i2__namespace.NgForOf, i1__namespace.MatGridTile], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GridListDynamicExample, [{
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
    GridListOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: GridListOverviewExample, selectors: [["grid-list-overview-example"]], decls: 9, vars: 0, consts: [["cols", "2", "rowHeight", "2:1"]], template: function GridListOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-grid-list", 0);
                i0__namespace.ɵɵelementStart(1, "mat-grid-tile");
                i0__namespace.ɵɵtext(2, "1");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-grid-tile");
                i0__namespace.ɵɵtext(4, "2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-grid-tile");
                i0__namespace.ɵɵtext(6, "3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-grid-tile");
                i0__namespace.ɵɵtext(8, "4");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatGridList, i1__namespace.MatGridTile], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GridListOverviewExample, [{
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
    GridListHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: GridListHarnessExample, selectors: [["grid-list-harness-example"]], decls: 14, vars: 0, consts: [["cols", "2", "rowHeight", "100px"], ["colspan", "2"]], template: function GridListHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-grid-list", 0);
                i0__namespace.ɵɵelementStart(1, "mat-grid-tile");
                i0__namespace.ɵɵtext(2, "Tile 1 (no header, no footer)");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-grid-tile");
                i0__namespace.ɵɵelementStart(4, "mat-grid-tile-header");
                i0__namespace.ɵɵtext(5, "Tile 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "mat-grid-tile", 1);
                i0__namespace.ɵɵelementStart(7, "mat-grid-tile-header");
                i0__namespace.ɵɵtext(8, "Tile 3");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "mat-grid-tile-footer");
                i0__namespace.ɵɵtext(10, "Tile 3 footer");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "mat-grid-tile");
                i0__namespace.ɵɵelementStart(12, "mat-grid-tile-header");
                i0__namespace.ɵɵtext(13, "Tile 4");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatGridList, i1__namespace.MatGridTile, i1__namespace.MatGridTileText, i1__namespace.MatGridTileHeaderCssMatStyler, i1__namespace.MatGridTileFooterCssMatStyler], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GridListHarnessExample, [{
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
    GridListExamplesModule.ɵfac = function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); };
    GridListExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: GridListExamplesModule });
    GridListExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule,
                i1.MatGridListModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GridListExamplesModule, [{
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
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
                GridListHarnessExample,
                GridListOverviewExample], imports: [i2.CommonModule,
                i1.MatGridListModule], exports: [GridListDynamicExample,
                GridListHarnessExample,
                GridListOverviewExample] });
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
