import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelement, ɵɵdefineComponent, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTableModule } from '@angular/material/table';
import { MatDefaultEnabledColumnResizeFlex, MatDefaultResizable, MatDefaultEnabledColumnResizeModule, MatDefaultEnabledColumnResize, MatColumnResize, MatResizable, MatColumnResizeModule } from '@angular/material-experimental/column-resize';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function DefaultEnabledColumnResizeFlexExample_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell", 12);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("matResizableMaxWidthPx", 100);
} }
function DefaultEnabledColumnResizeFlexExample_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function DefaultEnabledColumnResizeFlexExample_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell", 13);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("matResizableMinWidthPx", 150);
} }
function DefaultEnabledColumnResizeFlexExample_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function DefaultEnabledColumnResizeFlexExample_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell", 14);
    ɵɵtext(1, " Weight (Not resizable) ");
    ɵɵelementEnd();
} }
function DefaultEnabledColumnResizeFlexExample_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function DefaultEnabledColumnResizeFlexExample_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-header-cell");
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function DefaultEnabledColumnResizeFlexExample_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function DefaultEnabledColumnResizeFlexExample_mat_header_row_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-header-row");
} }
function DefaultEnabledColumnResizeFlexExample_mat_row_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-row");
} }
const ELEMENT_DATA = [
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
class DefaultEnabledColumnResizeFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
}
DefaultEnabledColumnResizeFlexExample.ɵfac = function DefaultEnabledColumnResizeFlexExample_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexExample)(); };
DefaultEnabledColumnResizeFlexExample.ɵcmp = ɵɵdefineComponent({ type: DefaultEnabledColumnResizeFlexExample, selectors: [["default-enabled-column-resize-flex-example"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], [3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], [3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matResizableMaxWidthPx"], [3, "matResizableMinWidthPx"], ["disableResize", ""]], template: function DefaultEnabledColumnResizeFlexExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, DefaultEnabledColumnResizeFlexExample_mat_header_cell_2_Template, 2, 1, "mat-header-cell", 2);
        ɵɵtemplate(3, DefaultEnabledColumnResizeFlexExample_mat_cell_3_Template, 2, 1, "mat-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, DefaultEnabledColumnResizeFlexExample_mat_header_cell_5_Template, 2, 1, "mat-header-cell", 5);
        ɵɵtemplate(6, DefaultEnabledColumnResizeFlexExample_mat_cell_6_Template, 2, 1, "mat-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 6);
        ɵɵtemplate(8, DefaultEnabledColumnResizeFlexExample_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 7);
        ɵɵtemplate(9, DefaultEnabledColumnResizeFlexExample_mat_cell_9_Template, 2, 1, "mat-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 8);
        ɵɵtemplate(11, DefaultEnabledColumnResizeFlexExample_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 9);
        ɵɵtemplate(12, DefaultEnabledColumnResizeFlexExample_mat_cell_12_Template, 2, 1, "mat-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, DefaultEnabledColumnResizeFlexExample_mat_header_row_13_Template, 1, 0, "mat-header-row", 10);
        ɵɵtemplate(14, DefaultEnabledColumnResizeFlexExample_mat_row_14_Template, 1, 0, "mat-row", 11);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatDefaultEnabledColumnResizeFlex, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatDefaultResizable, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DefaultEnabledColumnResizeFlexExample, [{
        type: Component,
        args: [{
                selector: 'default-enabled-column-resize-flex-example',
                templateUrl: 'default-enabled-column-resize-flex-example.html',
                styleUrls: ['default-enabled-column-resize-flex-example.css'],
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class DefaultEnabledColumnResizeFlexExampleModule {
}
DefaultEnabledColumnResizeFlexExampleModule.ɵmod = ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeFlexExampleModule });
DefaultEnabledColumnResizeFlexExampleModule.ɵinj = ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeFlexExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexExampleModule)(); }, imports: [[
            MatDefaultEnabledColumnResizeModule,
            MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DefaultEnabledColumnResizeFlexExampleModule, { declarations: [DefaultEnabledColumnResizeFlexExample], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeFlexExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DefaultEnabledColumnResizeFlexExampleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeFlexExample],
                exports: [DefaultEnabledColumnResizeFlexExample],
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function DefaultEnabledColumnResizeExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("matResizableMaxWidthPx", 100);
} }
function DefaultEnabledColumnResizeExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function DefaultEnabledColumnResizeExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 14);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("matResizableMinWidthPx", 150);
} }
function DefaultEnabledColumnResizeExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function DefaultEnabledColumnResizeExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 15);
    ɵɵtext(1, " Weight (Not resizable) ");
    ɵɵelementEnd();
} }
function DefaultEnabledColumnResizeExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function DefaultEnabledColumnResizeExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function DefaultEnabledColumnResizeExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function DefaultEnabledColumnResizeExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 17);
} }
function DefaultEnabledColumnResizeExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 18);
} }
const ELEMENT_DATA$1 = [
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
class DefaultEnabledColumnResizeExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$1;
    }
}
DefaultEnabledColumnResizeExample.ɵfac = function DefaultEnabledColumnResizeExample_Factory(t) { return new (t || DefaultEnabledColumnResizeExample)(); };
DefaultEnabledColumnResizeExample.ɵcmp = ɵɵdefineComponent({ type: DefaultEnabledColumnResizeExample, selectors: [["default-enabled-column-resize-example"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], ["mat-header-cell", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", "disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", "", "disableResize", ""], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DefaultEnabledColumnResizeExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, DefaultEnabledColumnResizeExample_th_2_Template, 2, 1, "th", 2);
        ɵɵtemplate(3, DefaultEnabledColumnResizeExample_td_3_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, DefaultEnabledColumnResizeExample_th_5_Template, 2, 1, "th", 5);
        ɵɵtemplate(6, DefaultEnabledColumnResizeExample_td_6_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 6);
        ɵɵtemplate(8, DefaultEnabledColumnResizeExample_th_8_Template, 2, 0, "th", 7);
        ɵɵtemplate(9, DefaultEnabledColumnResizeExample_td_9_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 8);
        ɵɵtemplate(11, DefaultEnabledColumnResizeExample_th_11_Template, 2, 0, "th", 9);
        ɵɵtemplate(12, DefaultEnabledColumnResizeExample_td_12_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, DefaultEnabledColumnResizeExample_tr_13_Template, 1, 0, "tr", 10);
        ɵɵtemplate(14, DefaultEnabledColumnResizeExample_tr_14_Template, 1, 0, "tr", 11);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatDefaultEnabledColumnResize, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatDefaultResizable, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DefaultEnabledColumnResizeExample, [{
        type: Component,
        args: [{
                selector: 'default-enabled-column-resize-example',
                templateUrl: 'default-enabled-column-resize-example.html',
                styleUrls: ['default-enabled-column-resize-example.css'],
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class DefaultEnabledColumnResizeExampleModule {
}
DefaultEnabledColumnResizeExampleModule.ɵmod = ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeExampleModule });
DefaultEnabledColumnResizeExampleModule.ɵinj = ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeExampleModule)(); }, imports: [[
            MatDefaultEnabledColumnResizeModule,
            MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DefaultEnabledColumnResizeExampleModule, { declarations: [DefaultEnabledColumnResizeExample], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DefaultEnabledColumnResizeExampleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeExample],
                exports: [DefaultEnabledColumnResizeExample],
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function OptInColumnResizeExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("matResizableMaxWidthPx", 100);
} }
function OptInColumnResizeExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function OptInColumnResizeExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 14);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("matResizableMinWidthPx", 150);
} }
function OptInColumnResizeExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function OptInColumnResizeExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 15);
    ɵɵtext(1, " Weight (Not resizable) ");
    ɵɵelementEnd();
} }
function OptInColumnResizeExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function OptInColumnResizeExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 16);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function OptInColumnResizeExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function OptInColumnResizeExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 17);
} }
function OptInColumnResizeExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 18);
} }
const ELEMENT_DATA$2 = [
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
class OptInColumnResizeExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$2;
    }
}
OptInColumnResizeExample.ɵfac = function OptInColumnResizeExample_Factory(t) { return new (t || OptInColumnResizeExample)(); };
OptInColumnResizeExample.ɵcmp = ɵɵdefineComponent({ type: OptInColumnResizeExample, selectors: [["opt-in-column-resize-example"]], decls: 15, vars: 3, consts: [["mat-table", "", "columnResize", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", "resizable", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "resizable", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", ""], ["mat-header-cell", "", "resizable", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function OptInColumnResizeExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, OptInColumnResizeExample_th_2_Template, 2, 1, "th", 2);
        ɵɵtemplate(3, OptInColumnResizeExample_td_3_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, OptInColumnResizeExample_th_5_Template, 2, 1, "th", 5);
        ɵɵtemplate(6, OptInColumnResizeExample_td_6_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 6);
        ɵɵtemplate(8, OptInColumnResizeExample_th_8_Template, 2, 0, "th", 7);
        ɵɵtemplate(9, OptInColumnResizeExample_td_9_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 8);
        ɵɵtemplate(11, OptInColumnResizeExample_th_11_Template, 2, 0, "th", 9);
        ɵɵtemplate(12, OptInColumnResizeExample_td_12_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, OptInColumnResizeExample_tr_13_Template, 1, 0, "tr", 10);
        ɵɵtemplate(14, OptInColumnResizeExample_tr_14_Template, 1, 0, "tr", 11);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [MatTable, MatColumnResize, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatResizable, MatCell, MatHeaderRow, MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(OptInColumnResizeExample, [{
        type: Component,
        args: [{
                selector: 'opt-in-column-resize-example',
                templateUrl: 'opt-in-column-resize-example.html',
                styleUrls: ['opt-in-column-resize-example.css'],
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class OptInColumnResizeExampleModule {
}
OptInColumnResizeExampleModule.ɵmod = ɵɵdefineNgModule({ type: OptInColumnResizeExampleModule });
OptInColumnResizeExampleModule.ɵinj = ɵɵdefineInjector({ factory: function OptInColumnResizeExampleModule_Factory(t) { return new (t || OptInColumnResizeExampleModule)(); }, imports: [[
            MatColumnResizeModule,
            MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OptInColumnResizeExampleModule, { declarations: [OptInColumnResizeExample], imports: [MatColumnResizeModule,
        MatTableModule], exports: [OptInColumnResizeExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(OptInColumnResizeExampleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [OptInColumnResizeExample],
                exports: [OptInColumnResizeExample],
            }]
    }], null, null); })();

class ColumnResizeExamplesModule {
}
ColumnResizeExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ColumnResizeExamplesModule });
ColumnResizeExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ColumnResizeExamplesModule_Factory(t) { return new (t || ColumnResizeExamplesModule)(); }, imports: [DefaultEnabledColumnResizeExampleModule,
        DefaultEnabledColumnResizeFlexExampleModule,
        OptInColumnResizeExampleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ColumnResizeExamplesModule, { exports: [DefaultEnabledColumnResizeExampleModule,
        DefaultEnabledColumnResizeFlexExampleModule,
        OptInColumnResizeExampleModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ColumnResizeExamplesModule, [{
        type: NgModule,
        args: [{
                exports: [
                    DefaultEnabledColumnResizeExampleModule,
                    DefaultEnabledColumnResizeFlexExampleModule,
                    OptInColumnResizeExampleModule,
                ],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnResizeExamplesModule, DefaultEnabledColumnResizeExample, DefaultEnabledColumnResizeExampleModule, DefaultEnabledColumnResizeFlexExample, DefaultEnabledColumnResizeFlexExampleModule, OptInColumnResizeExample, OptInColumnResizeExampleModule };
//# sourceMappingURL=column-resize.js.map
