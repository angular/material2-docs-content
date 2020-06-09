(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material-experimental/column-resize'), require('@angular/material/table')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/column-resize', ['exports', '@angular/core', '@angular/material-experimental/column-resize', '@angular/material/table'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.columnResize = {}), global.ng.core, global.ng.materialExperimental.columnResize, global.ng.material.table));
}(this, (function (exports, i0, i1, i2) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function DefaultEnabledColumnResizeDemo_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matResizableMaxWidthPx", 100);
    } }
    function DefaultEnabledColumnResizeDemo_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r10 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
    } }
    function DefaultEnabledColumnResizeDemo_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 14);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matResizableMinWidthPx", 150);
    } }
    function DefaultEnabledColumnResizeDemo_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r11 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
    } }
    function DefaultEnabledColumnResizeDemo_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, " Weight (Not resizable) ");
        i0.ɵɵelementEnd();
    } }
    function DefaultEnabledColumnResizeDemo_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r12 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
    } }
    function DefaultEnabledColumnResizeDemo_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function DefaultEnabledColumnResizeDemo_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r13 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
    } }
    function DefaultEnabledColumnResizeDemo_tr_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 17);
    } }
    function DefaultEnabledColumnResizeDemo_tr_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 18);
    } }
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
     * @title Default-enabled column resize with a table-based mat-table.
     */
    var DefaultEnabledColumnResizeDemo = /** @class */ (function () {
        function DefaultEnabledColumnResizeDemo() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA;
        }
        DefaultEnabledColumnResizeDemo.ɵfac = function DefaultEnabledColumnResizeDemo_Factory(t) { return new (t || DefaultEnabledColumnResizeDemo)(); };
        DefaultEnabledColumnResizeDemo.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEnabledColumnResizeDemo, selectors: [["default-enabled-column-resize-demo"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", "disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", "", "disableResize", ""], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DefaultEnabledColumnResizeDemo_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, DefaultEnabledColumnResizeDemo_th_2_Template, 2, 1, "th", 2);
                i0.ɵɵtemplate(3, DefaultEnabledColumnResizeDemo_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, DefaultEnabledColumnResizeDemo_th_5_Template, 2, 1, "th", 5);
                i0.ɵɵtemplate(6, DefaultEnabledColumnResizeDemo_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 6);
                i0.ɵɵtemplate(8, DefaultEnabledColumnResizeDemo_th_8_Template, 2, 0, "th", 7);
                i0.ɵɵtemplate(9, DefaultEnabledColumnResizeDemo_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 8);
                i0.ɵɵtemplate(11, DefaultEnabledColumnResizeDemo_th_11_Template, 2, 0, "th", 9);
                i0.ɵɵtemplate(12, DefaultEnabledColumnResizeDemo_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, DefaultEnabledColumnResizeDemo_tr_13_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(14, DefaultEnabledColumnResizeDemo_tr_14_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1.MatDefaultEnabledColumnResize, i2.MatTable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i1.MatDefaultResizable, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
        return DefaultEnabledColumnResizeDemo;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeDemo, [{
            type: i0.Component,
            args: [{
                    selector: 'default-enabled-column-resize-demo',
                    templateUrl: 'default-enabled-column-resize-demo.html',
                    styleUrls: ['default-enabled-column-resize-demo.css'],
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DefaultEnabledColumnResizeDemoModule = /** @class */ (function () {
        function DefaultEnabledColumnResizeDemoModule() {
        }
        DefaultEnabledColumnResizeDemoModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeDemoModule });
        DefaultEnabledColumnResizeDemoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeDemoModule_Factory(t) { return new (t || DefaultEnabledColumnResizeDemoModule)(); }, imports: [[
                    i1.MatDefaultEnabledColumnResizeModule,
                    i2.MatTableModule,
                ]] });
        return DefaultEnabledColumnResizeDemoModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeDemoModule, { declarations: [DefaultEnabledColumnResizeDemo], imports: [i1.MatDefaultEnabledColumnResizeModule,
            i2.MatTableModule], exports: [DefaultEnabledColumnResizeDemo] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeDemoModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatDefaultEnabledColumnResizeModule,
                        i2.MatTableModule,
                    ],
                    declarations: [DefaultEnabledColumnResizeDemo],
                    exports: [DefaultEnabledColumnResizeDemo],
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function DefaultEnabledColumnResizeFlexDemo_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell", 12);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matResizableMaxWidthPx", 100);
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r10 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell", 13);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matResizableMinWidthPx", 150);
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r11 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell", 14);
        i0.ɵɵtext(1, " Weight (Not resizable) ");
        i0.ɵɵelementEnd();
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r12 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-header-cell");
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r13 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_header_row_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-header-row");
    } }
    function DefaultEnabledColumnResizeFlexDemo_mat_row_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-row");
    } }
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
     * @title Default-enabled column resize with a flex-based mat-table.
     */
    var DefaultEnabledColumnResizeFlexDemo = /** @class */ (function () {
        function DefaultEnabledColumnResizeFlexDemo() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$1;
        }
        DefaultEnabledColumnResizeFlexDemo.ɵfac = function DefaultEnabledColumnResizeFlexDemo_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexDemo)(); };
        DefaultEnabledColumnResizeFlexDemo.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEnabledColumnResizeFlexDemo, selectors: [["default-enabled-column-resize-flex-demo"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position"], [3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], [3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matResizableMaxWidthPx"], [3, "matResizableMinWidthPx"], ["disableResize", ""]], template: function DefaultEnabledColumnResizeFlexDemo_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, DefaultEnabledColumnResizeFlexDemo_mat_header_cell_2_Template, 2, 1, "mat-header-cell", 2);
                i0.ɵɵtemplate(3, DefaultEnabledColumnResizeFlexDemo_mat_cell_3_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, DefaultEnabledColumnResizeFlexDemo_mat_header_cell_5_Template, 2, 1, "mat-header-cell", 5);
                i0.ɵɵtemplate(6, DefaultEnabledColumnResizeFlexDemo_mat_cell_6_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 6);
                i0.ɵɵtemplate(8, DefaultEnabledColumnResizeFlexDemo_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 7);
                i0.ɵɵtemplate(9, DefaultEnabledColumnResizeFlexDemo_mat_cell_9_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 8);
                i0.ɵɵtemplate(11, DefaultEnabledColumnResizeFlexDemo_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 9);
                i0.ɵɵtemplate(12, DefaultEnabledColumnResizeFlexDemo_mat_cell_12_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, DefaultEnabledColumnResizeFlexDemo_mat_header_row_13_Template, 1, 0, "mat-header-row", 10);
                i0.ɵɵtemplate(14, DefaultEnabledColumnResizeFlexDemo_mat_row_14_Template, 1, 0, "mat-row", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1.MatDefaultEnabledColumnResizeFlex, i2.MatTable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i1.MatDefaultResizable, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
        return DefaultEnabledColumnResizeFlexDemo;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexDemo, [{
            type: i0.Component,
            args: [{
                    selector: 'default-enabled-column-resize-flex-demo',
                    templateUrl: 'default-enabled-column-resize-flex-demo.html',
                    styleUrls: ['default-enabled-column-resize-flex-demo.css'],
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DefaultEnabledColumnResizeFlexDemoModule = /** @class */ (function () {
        function DefaultEnabledColumnResizeFlexDemoModule() {
        }
        DefaultEnabledColumnResizeFlexDemoModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeFlexDemoModule });
        DefaultEnabledColumnResizeFlexDemoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeFlexDemoModule_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexDemoModule)(); }, imports: [[
                    i1.MatDefaultEnabledColumnResizeModule,
                    i2.MatTableModule,
                ]] });
        return DefaultEnabledColumnResizeFlexDemoModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeFlexDemoModule, { declarations: [DefaultEnabledColumnResizeFlexDemo], imports: [i1.MatDefaultEnabledColumnResizeModule,
            i2.MatTableModule], exports: [DefaultEnabledColumnResizeFlexDemo] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexDemoModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatDefaultEnabledColumnResizeModule,
                        i2.MatTableModule,
                    ],
                    declarations: [DefaultEnabledColumnResizeFlexDemo],
                    exports: [DefaultEnabledColumnResizeFlexDemo],
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function OptInColumnResizeDemo_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 12);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matResizableMaxWidthPx", 100);
    } }
    function OptInColumnResizeDemo_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r10 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
    } }
    function OptInColumnResizeDemo_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 14);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matResizableMinWidthPx", 150);
    } }
    function OptInColumnResizeDemo_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r11 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
    } }
    function OptInColumnResizeDemo_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 15);
        i0.ɵɵtext(1, " Weight (Not resizable) ");
        i0.ɵɵelementEnd();
    } }
    function OptInColumnResizeDemo_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r12 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
    } }
    function OptInColumnResizeDemo_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 16);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function OptInColumnResizeDemo_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 13);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r13 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
    } }
    function OptInColumnResizeDemo_tr_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 17);
    } }
    function OptInColumnResizeDemo_tr_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 18);
    } }
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
     * @title Opt-in column resize with a table-based mat-table.
     */
    var OptInColumnResizeDemo = /** @class */ (function () {
        function OptInColumnResizeDemo() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$2;
        }
        OptInColumnResizeDemo.ɵfac = function OptInColumnResizeDemo_Factory(t) { return new (t || OptInColumnResizeDemo)(); };
        OptInColumnResizeDemo.ɵcmp = i0.ɵɵdefineComponent({ type: OptInColumnResizeDemo, selectors: [["opt-in-column-resize-demo"]], decls: 15, vars: 3, consts: [["mat-table", "", "columnResize", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "resizable", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "resizable", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", "resizable", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "resizable", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", ""], ["mat-header-cell", "", "resizable", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function OptInColumnResizeDemo_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, OptInColumnResizeDemo_th_2_Template, 2, 1, "th", 2);
                i0.ɵɵtemplate(3, OptInColumnResizeDemo_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, OptInColumnResizeDemo_th_5_Template, 2, 1, "th", 5);
                i0.ɵɵtemplate(6, OptInColumnResizeDemo_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 6);
                i0.ɵɵtemplate(8, OptInColumnResizeDemo_th_8_Template, 2, 0, "th", 7);
                i0.ɵɵtemplate(9, OptInColumnResizeDemo_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 8);
                i0.ɵɵtemplate(11, OptInColumnResizeDemo_th_11_Template, 2, 0, "th", 9);
                i0.ɵɵtemplate(12, OptInColumnResizeDemo_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, OptInColumnResizeDemo_tr_13_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(14, OptInColumnResizeDemo_tr_14_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [i2.MatTable, i1.MatColumnResize, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i2.MatHeaderCell, i1.MatResizable, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
        return OptInColumnResizeDemo;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OptInColumnResizeDemo, [{
            type: i0.Component,
            args: [{
                    selector: 'opt-in-column-resize-demo',
                    templateUrl: 'opt-in-column-resize-demo.html',
                    styleUrls: ['opt-in-column-resize-demo.css'],
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var OptInColumnResizeDemoModule = /** @class */ (function () {
        function OptInColumnResizeDemoModule() {
        }
        OptInColumnResizeDemoModule.ɵmod = i0.ɵɵdefineNgModule({ type: OptInColumnResizeDemoModule });
        OptInColumnResizeDemoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OptInColumnResizeDemoModule_Factory(t) { return new (t || OptInColumnResizeDemoModule)(); }, imports: [[
                    i1.MatColumnResizeModule,
                    i2.MatTableModule,
                ]] });
        return OptInColumnResizeDemoModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OptInColumnResizeDemoModule, { declarations: [OptInColumnResizeDemo], imports: [i1.MatColumnResizeModule,
            i2.MatTableModule], exports: [OptInColumnResizeDemo] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OptInColumnResizeDemoModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatColumnResizeModule,
                        i2.MatTableModule,
                    ],
                    declarations: [OptInColumnResizeDemo],
                    exports: [OptInColumnResizeDemo],
                }]
        }], null, null); })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DefaultEnabledColumnResizeDemo = DefaultEnabledColumnResizeDemo;
    exports.DefaultEnabledColumnResizeDemoModule = DefaultEnabledColumnResizeDemoModule;
    exports.DefaultEnabledColumnResizeFlexDemo = DefaultEnabledColumnResizeFlexDemo;
    exports.DefaultEnabledColumnResizeFlexDemoModule = DefaultEnabledColumnResizeFlexDemoModule;
    exports.OptInColumnResizeDemo = OptInColumnResizeDemo;
    exports.OptInColumnResizeDemoModule = OptInColumnResizeDemoModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-column-resize.umd.js.map
