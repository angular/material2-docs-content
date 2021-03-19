(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/table'), require('@angular/material-experimental/column-resize')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/column-resize', ['exports', '@angular/core', '@angular/material/table', '@angular/material-experimental/column-resize'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.columnResize = {}), global.ng.core, global.ng.material.table, global.ng.materialExperimental.columnResize));
}(this, (function (exports, i0, i2, i1) { 'use strict';

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

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function DefaultEnabledColumnResizeFlexExample_mat_header_cell_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-header-cell", 12);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matResizableMaxWidthPx", 100);
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_cell_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_header_cell_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-header-cell", 13);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matResizableMinWidthPx", 150);
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_cell_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_header_cell_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-header-cell", 14);
            i0__namespace.ɵɵtext(1, " Weight (Not resizable) ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_cell_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_header_cell_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-header-cell");
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_cell_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-cell");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_header_row_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-header-row");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_row_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-row");
        }
    }
    var ELEMENT_DATA$2 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title Default-enabled column resize with a flex-based mat-table.
     */
    var DefaultEnabledColumnResizeFlexExample = /** @class */ (function () {
        function DefaultEnabledColumnResizeFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$2;
        }
        return DefaultEnabledColumnResizeFlexExample;
    }());
    DefaultEnabledColumnResizeFlexExample.ɵfac = function DefaultEnabledColumnResizeFlexExample_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexExample)(); };
    DefaultEnabledColumnResizeFlexExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DefaultEnabledColumnResizeFlexExample, selectors: [["default-enabled-column-resize-flex-example"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], [3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], [3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matResizableMaxWidthPx"], [3, "matResizableMinWidthPx"], ["disableResize", ""]], template: function DefaultEnabledColumnResizeFlexExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-table", 0);
                i0__namespace.ɵɵelementContainerStart(1, 1);
                i0__namespace.ɵɵtemplate(2, DefaultEnabledColumnResizeFlexExample_mat_header_cell_2_Template, 2, 1, "mat-header-cell", 2);
                i0__namespace.ɵɵtemplate(3, DefaultEnabledColumnResizeFlexExample_mat_cell_3_Template, 2, 1, "mat-cell", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(4, 4);
                i0__namespace.ɵɵtemplate(5, DefaultEnabledColumnResizeFlexExample_mat_header_cell_5_Template, 2, 1, "mat-header-cell", 5);
                i0__namespace.ɵɵtemplate(6, DefaultEnabledColumnResizeFlexExample_mat_cell_6_Template, 2, 1, "mat-cell", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(7, 6);
                i0__namespace.ɵɵtemplate(8, DefaultEnabledColumnResizeFlexExample_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 7);
                i0__namespace.ɵɵtemplate(9, DefaultEnabledColumnResizeFlexExample_mat_cell_9_Template, 2, 1, "mat-cell", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(10, 8);
                i0__namespace.ɵɵtemplate(11, DefaultEnabledColumnResizeFlexExample_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 9);
                i0__namespace.ɵɵtemplate(12, DefaultEnabledColumnResizeFlexExample_mat_cell_12_Template, 2, 1, "mat-cell", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(13, DefaultEnabledColumnResizeFlexExample_mat_header_row_13_Template, 1, 0, "mat-header-row", 10);
                i0__namespace.ɵɵtemplate(14, DefaultEnabledColumnResizeFlexExample_mat_row_14_Template, 1, 0, "mat-row", 11);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(13);
                i0__namespace.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.MatDefaultEnabledColumnResizeFlex, i2__namespace.MatTable, i2__namespace.MatColumnDef, i2__namespace.MatHeaderCellDef, i2__namespace.MatCellDef, i2__namespace.MatHeaderRowDef, i2__namespace.MatRowDef, i1__namespace.MatDefaultResizable, i2__namespace.MatHeaderCell, i2__namespace.MatCell, i2__namespace.MatHeaderRow, i2__namespace.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexExample, [{
                type: i0.Component,
                args: [{
                        selector: 'default-enabled-column-resize-flex-example',
                        templateUrl: 'default-enabled-column-resize-flex-example.html',
                        styleUrls: ['default-enabled-column-resize-flex-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DefaultEnabledColumnResizeFlexExampleModule = /** @class */ (function () {
        function DefaultEnabledColumnResizeFlexExampleModule() {
        }
        return DefaultEnabledColumnResizeFlexExampleModule;
    }());
    DefaultEnabledColumnResizeFlexExampleModule.ɵfac = function DefaultEnabledColumnResizeFlexExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexExampleModule)(); };
    DefaultEnabledColumnResizeFlexExampleModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeFlexExampleModule });
    DefaultEnabledColumnResizeFlexExampleModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.MatDefaultEnabledColumnResizeModule,
                i2.MatTableModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexExampleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatDefaultEnabledColumnResizeModule,
                            i2.MatTableModule,
                        ],
                        declarations: [DefaultEnabledColumnResizeFlexExample],
                        exports: [DefaultEnabledColumnResizeFlexExample],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeFlexExampleModule, { declarations: [DefaultEnabledColumnResizeFlexExample], imports: [i1.MatDefaultEnabledColumnResizeModule,
                i2.MatTableModule], exports: [DefaultEnabledColumnResizeFlexExample] });
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function DefaultEnabledColumnResizeExample_th_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 12);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matResizableMaxWidthPx", 100);
        }
    }
    function DefaultEnabledColumnResizeExample_td_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 13);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function DefaultEnabledColumnResizeExample_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 14);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matResizableMinWidthPx", 150);
        }
    }
    function DefaultEnabledColumnResizeExample_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 13);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function DefaultEnabledColumnResizeExample_th_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 15);
            i0__namespace.ɵɵtext(1, " Weight (Not resizable) ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DefaultEnabledColumnResizeExample_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 13);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function DefaultEnabledColumnResizeExample_th_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 16);
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DefaultEnabledColumnResizeExample_td_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 13);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function DefaultEnabledColumnResizeExample_tr_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 17);
        }
    }
    function DefaultEnabledColumnResizeExample_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 18);
        }
    }
    var ELEMENT_DATA$1 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title Default-enabled column resize with a table-based mat-table.
     */
    var DefaultEnabledColumnResizeExample = /** @class */ (function () {
        function DefaultEnabledColumnResizeExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$1;
        }
        return DefaultEnabledColumnResizeExample;
    }());
    DefaultEnabledColumnResizeExample.ɵfac = function DefaultEnabledColumnResizeExample_Factory(t) { return new (t || DefaultEnabledColumnResizeExample)(); };
    DefaultEnabledColumnResizeExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DefaultEnabledColumnResizeExample, selectors: [["default-enabled-column-resize-example"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], ["mat-header-cell", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", "disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", "", "disableResize", ""], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DefaultEnabledColumnResizeExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵelementContainerStart(1, 1);
                i0__namespace.ɵɵtemplate(2, DefaultEnabledColumnResizeExample_th_2_Template, 2, 1, "th", 2);
                i0__namespace.ɵɵtemplate(3, DefaultEnabledColumnResizeExample_td_3_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(4, 4);
                i0__namespace.ɵɵtemplate(5, DefaultEnabledColumnResizeExample_th_5_Template, 2, 1, "th", 5);
                i0__namespace.ɵɵtemplate(6, DefaultEnabledColumnResizeExample_td_6_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(7, 6);
                i0__namespace.ɵɵtemplate(8, DefaultEnabledColumnResizeExample_th_8_Template, 2, 0, "th", 7);
                i0__namespace.ɵɵtemplate(9, DefaultEnabledColumnResizeExample_td_9_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(10, 8);
                i0__namespace.ɵɵtemplate(11, DefaultEnabledColumnResizeExample_th_11_Template, 2, 0, "th", 9);
                i0__namespace.ɵɵtemplate(12, DefaultEnabledColumnResizeExample_td_12_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(13, DefaultEnabledColumnResizeExample_tr_13_Template, 1, 0, "tr", 10);
                i0__namespace.ɵɵtemplate(14, DefaultEnabledColumnResizeExample_tr_14_Template, 1, 0, "tr", 11);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(13);
                i0__namespace.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace.MatDefaultEnabledColumnResize, i2__namespace.MatTable, i2__namespace.MatColumnDef, i2__namespace.MatHeaderCellDef, i2__namespace.MatCellDef, i2__namespace.MatHeaderRowDef, i2__namespace.MatRowDef, i1__namespace.MatDefaultResizable, i2__namespace.MatHeaderCell, i2__namespace.MatCell, i2__namespace.MatHeaderRow, i2__namespace.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DefaultEnabledColumnResizeExample, [{
                type: i0.Component,
                args: [{
                        selector: 'default-enabled-column-resize-example',
                        templateUrl: 'default-enabled-column-resize-example.html',
                        styleUrls: ['default-enabled-column-resize-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DefaultEnabledColumnResizeExampleModule = /** @class */ (function () {
        function DefaultEnabledColumnResizeExampleModule() {
        }
        return DefaultEnabledColumnResizeExampleModule;
    }());
    DefaultEnabledColumnResizeExampleModule.ɵfac = function DefaultEnabledColumnResizeExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeExampleModule)(); };
    DefaultEnabledColumnResizeExampleModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeExampleModule });
    DefaultEnabledColumnResizeExampleModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.MatDefaultEnabledColumnResizeModule,
                i2.MatTableModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DefaultEnabledColumnResizeExampleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatDefaultEnabledColumnResizeModule,
                            i2.MatTableModule,
                        ],
                        declarations: [DefaultEnabledColumnResizeExample],
                        exports: [DefaultEnabledColumnResizeExample],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeExampleModule, { declarations: [DefaultEnabledColumnResizeExample], imports: [i1.MatDefaultEnabledColumnResizeModule,
                i2.MatTableModule], exports: [DefaultEnabledColumnResizeExample] });
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function OptInColumnResizeExample_th_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 12);
            i0__namespace.ɵɵtext(1, " No. ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matResizableMaxWidthPx", 100);
        }
    }
    function OptInColumnResizeExample_td_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 13);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function OptInColumnResizeExample_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 14);
            i0__namespace.ɵɵtext(1, " Name ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("matResizableMinWidthPx", 150);
        }
    }
    function OptInColumnResizeExample_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 13);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function OptInColumnResizeExample_th_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 15);
            i0__namespace.ɵɵtext(1, " Weight (Not resizable) ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function OptInColumnResizeExample_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 13);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function OptInColumnResizeExample_th_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 16);
            i0__namespace.ɵɵtext(1, " Symbol ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function OptInColumnResizeExample_td_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 13);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function OptInColumnResizeExample_tr_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 17);
        }
    }
    function OptInColumnResizeExample_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 18);
        }
    }
    var ELEMENT_DATA = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title Opt-in column resize with a table-based mat-table.
     */
    var OptInColumnResizeExample = /** @class */ (function () {
        function OptInColumnResizeExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA;
        }
        return OptInColumnResizeExample;
    }());
    OptInColumnResizeExample.ɵfac = function OptInColumnResizeExample_Factory(t) { return new (t || OptInColumnResizeExample)(); };
    OptInColumnResizeExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: OptInColumnResizeExample, selectors: [["opt-in-column-resize-example"]], decls: 15, vars: 3, consts: [["mat-table", "", "columnResize", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", "resizable", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "resizable", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", ""], ["mat-header-cell", "", "resizable", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function OptInColumnResizeExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵelementContainerStart(1, 1);
                i0__namespace.ɵɵtemplate(2, OptInColumnResizeExample_th_2_Template, 2, 1, "th", 2);
                i0__namespace.ɵɵtemplate(3, OptInColumnResizeExample_td_3_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(4, 4);
                i0__namespace.ɵɵtemplate(5, OptInColumnResizeExample_th_5_Template, 2, 1, "th", 5);
                i0__namespace.ɵɵtemplate(6, OptInColumnResizeExample_td_6_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(7, 6);
                i0__namespace.ɵɵtemplate(8, OptInColumnResizeExample_th_8_Template, 2, 0, "th", 7);
                i0__namespace.ɵɵtemplate(9, OptInColumnResizeExample_td_9_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementContainerStart(10, 8);
                i0__namespace.ɵɵtemplate(11, OptInColumnResizeExample_th_11_Template, 2, 0, "th", 9);
                i0__namespace.ɵɵtemplate(12, OptInColumnResizeExample_td_12_Template, 2, 1, "td", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵtemplate(13, OptInColumnResizeExample_tr_13_Template, 1, 0, "tr", 10);
                i0__namespace.ɵɵtemplate(14, OptInColumnResizeExample_tr_14_Template, 1, 0, "tr", 11);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource);
                i0__namespace.ɵɵadvance(13);
                i0__namespace.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i2__namespace.MatTable, i1__namespace.MatColumnResize, i2__namespace.MatColumnDef, i2__namespace.MatHeaderCellDef, i2__namespace.MatCellDef, i2__namespace.MatHeaderRowDef, i2__namespace.MatRowDef, i2__namespace.MatHeaderCell, i1__namespace.MatResizable, i2__namespace.MatCell, i2__namespace.MatHeaderRow, i2__namespace.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(OptInColumnResizeExample, [{
                type: i0.Component,
                args: [{
                        selector: 'opt-in-column-resize-example',
                        templateUrl: 'opt-in-column-resize-example.html',
                        styleUrls: ['opt-in-column-resize-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var OptInColumnResizeExampleModule = /** @class */ (function () {
        function OptInColumnResizeExampleModule() {
        }
        return OptInColumnResizeExampleModule;
    }());
    OptInColumnResizeExampleModule.ɵfac = function OptInColumnResizeExampleModule_Factory(t) { return new (t || OptInColumnResizeExampleModule)(); };
    OptInColumnResizeExampleModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: OptInColumnResizeExampleModule });
    OptInColumnResizeExampleModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.MatColumnResizeModule,
                i2.MatTableModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(OptInColumnResizeExampleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatColumnResizeModule,
                            i2.MatTableModule,
                        ],
                        declarations: [OptInColumnResizeExample],
                        exports: [OptInColumnResizeExample],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(OptInColumnResizeExampleModule, { declarations: [OptInColumnResizeExample], imports: [i1.MatColumnResizeModule,
                i2.MatTableModule], exports: [OptInColumnResizeExample] });
    })();

    var ColumnResizeExamplesModule = /** @class */ (function () {
        function ColumnResizeExamplesModule() {
        }
        return ColumnResizeExamplesModule;
    }());
    ColumnResizeExamplesModule.ɵfac = function ColumnResizeExamplesModule_Factory(t) { return new (t || ColumnResizeExamplesModule)(); };
    ColumnResizeExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ColumnResizeExamplesModule });
    ColumnResizeExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [DefaultEnabledColumnResizeExampleModule,
            DefaultEnabledColumnResizeFlexExampleModule,
            OptInColumnResizeExampleModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ColumnResizeExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        exports: [
                            DefaultEnabledColumnResizeExampleModule,
                            DefaultEnabledColumnResizeFlexExampleModule,
                            OptInColumnResizeExampleModule,
                        ],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ColumnResizeExamplesModule, { exports: [DefaultEnabledColumnResizeExampleModule,
                DefaultEnabledColumnResizeFlexExampleModule,
                OptInColumnResizeExampleModule] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ColumnResizeExamplesModule = ColumnResizeExamplesModule;
    exports.DefaultEnabledColumnResizeExample = DefaultEnabledColumnResizeExample;
    exports.DefaultEnabledColumnResizeExampleModule = DefaultEnabledColumnResizeExampleModule;
    exports.DefaultEnabledColumnResizeFlexExample = DefaultEnabledColumnResizeFlexExample;
    exports.DefaultEnabledColumnResizeFlexExampleModule = DefaultEnabledColumnResizeFlexExampleModule;
    exports.OptInColumnResizeExample = OptInColumnResizeExample;
    exports.OptInColumnResizeExampleModule = OptInColumnResizeExampleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-column-resize.umd.js.map
