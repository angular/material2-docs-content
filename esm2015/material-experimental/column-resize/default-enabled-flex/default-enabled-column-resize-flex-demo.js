/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material-experimental/column-resize/default-enabled-flex/default-enabled-column-resize-flex-demo.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/column-resize";
import * as i2 from "@angular/material/table";
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
    const element_r10 = ctx.$implicit;
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
    const element_r11 = ctx.$implicit;
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
    const element_r12 = ctx.$implicit;
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
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function DefaultEnabledColumnResizeFlexDemo_mat_header_row_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-header-row");
} }
function DefaultEnabledColumnResizeFlexDemo_mat_row_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-row");
} }
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @record
 */
export function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
}
/** @type {?} */
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
 * \@title Default-enabled column resize with a flex-based mat-table.
 */
export class DefaultEnabledColumnResizeFlexDemo {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
}
DefaultEnabledColumnResizeFlexDemo.decorators = [
    { type: Component, args: [{
                selector: 'default-enabled-column-resize-flex-demo',
                templateUrl: 'default-enabled-column-resize-flex-demo.html',
                styleUrls: ['default-enabled-column-resize-flex-demo.css'],
            },] },
];
/** @nocollapse */ DefaultEnabledColumnResizeFlexDemo.ɵfac = function DefaultEnabledColumnResizeFlexDemo_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexDemo)(); };
/** @nocollapse */ DefaultEnabledColumnResizeFlexDemo.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEnabledColumnResizeFlexDemo, selectors: [["default-enabled-column-resize-flex-demo"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position"], [3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], [3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matResizableMaxWidthPx"], [3, "matResizableMinWidthPx"], ["disableResize", ""]], template: function DefaultEnabledColumnResizeFlexDemo_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexDemo, [{
        type: Component,
        args: [{
                selector: 'default-enabled-column-resize-flex-demo',
                templateUrl: 'default-enabled-column-resize-flex-demo.html',
                styleUrls: ['default-enabled-column-resize-flex-demo.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DefaultEnabledColumnResizeFlexDemo.prototype.displayedColumns;
    /** @type {?} */
    DefaultEnabledColumnResizeFlexDemo.prototype.dataSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1kZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUvZGVmYXVsdC1lbmFibGVkLWZsZXgvZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1kZW1vLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUvZGVmYXVsdC1lbmFibGVkLWZsZXgvZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1kZW1vLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0xwQywyQ0FBbUU7SUFBQSxxQkFBSTtJQUFBLGlCQUFrQjs7SUFBdEQsNENBQThCOzs7SUFDakUsZ0NBQXFDO0lBQUEsWUFBcUI7SUFBQSxpQkFBVzs7O0lBQWhDLGVBQXFCO0lBQXJCLHFEQUFxQjs7O0lBSzFELDJDQUFtRTtJQUFBLHNCQUFLO0lBQUEsaUJBQWtCOztJQUF2RCw0Q0FBOEI7OztJQUNqRSxnQ0FBcUM7SUFBQSxZQUFpQjtJQUFBLGlCQUFXOzs7SUFBNUIsZUFBaUI7SUFBakIsaURBQWlCOzs7SUFLdEQsMkNBQWtEO0lBQUEsd0NBQXVCO0lBQUEsaUJBQWtCOzs7SUFDM0YsZ0NBQXFDO0lBQUEsWUFBbUI7SUFBQSxpQkFBVzs7O0lBQTlCLGVBQW1CO0lBQW5CLG1EQUFtQjs7O0lBS3hELHVDQUFvQztJQUFBLHdCQUFPO0lBQUEsaUJBQWtCOzs7SUFDN0QsZ0NBQXFDO0lBQUEsWUFBbUI7SUFBQSxpQkFBVzs7O0lBQTlCLGVBQW1CO0lBQW5CLG1EQUFtQjs7O0lBRzFELGlDQUFxRTs7O0lBQ3JFLDBCQUFvRTs7Ozs7Ozs7Ozs7O0FEaEJ0RSxxQ0FLQzs7O0lBSkMsK0JBQWE7O0lBQ2IsbUNBQWlCOztJQUNqQixpQ0FBZTs7SUFDZixpQ0FBZTs7O01BR1gsWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUNoRSxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzlEOzs7O0FBVUQsTUFBTSxPQUFPLGtDQUFrQztJQUwvQztRQU1FLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUMzQjs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFdBQVcsRUFBRSw4Q0FBOEM7Z0JBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO2FBQzNEOzt1SUFDWSxrQ0FBa0M7MEZBQWxDLGtDQUFrQztRQ2hEL0Msb0NBQ0U7UUFDQSxnQ0FDRTtRQUFBLDJHQUFtRTtRQUNuRSw2RkFBcUM7UUFDdkMsMEJBQWU7UUFHZixnQ0FDRTtRQUFBLDJHQUFtRTtRQUNuRSw2RkFBcUM7UUFDdkMsMEJBQWU7UUFHZixnQ0FDRTtRQUFBLDJHQUFrRDtRQUNsRCw2RkFBcUM7UUFDdkMsMEJBQWU7UUFHZixpQ0FDRTtRQUFBLDZHQUFvQztRQUNwQywrRkFBcUM7UUFDdkMsMEJBQWU7UUFFZiw0R0FBb0Q7UUFDcEQsOEZBQTBEO1FBQzVELGlCQUFZOztRQTNCRCwyQ0FBeUI7UUF5QmxCLGdCQUFtQztRQUFuQyxzREFBbUM7UUFDMUMsZUFBZ0Q7UUFBaEQsdURBQWdEOztrRERzQjlDLGtDQUFrQztjQUw5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsV0FBVyxFQUFFLDhDQUE4QztnQkFDM0QsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7YUFDM0Q7Ozs7SUFFQyw4REFBc0U7O0lBQ3RFLHdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuICB7cG9zaXRpb246IDExLCBuYW1lOiAnU29kaXVtJywgd2VpZ2h0OiAyMi45ODk3LCBzeW1ib2w6ICdOYSd9LFxuICB7cG9zaXRpb246IDEyLCBuYW1lOiAnTWFnbmVzaXVtJywgd2VpZ2h0OiAyNC4zMDUsIHN5bWJvbDogJ01nJ30sXG4gIHtwb3NpdGlvbjogMTMsIG5hbWU6ICdBbHVtaW51bScsIHdlaWdodDogMjYuOTgxNSwgc3ltYm9sOiAnQWwnfSxcbiAge3Bvc2l0aW9uOiAxNCwgbmFtZTogJ1NpbGljb24nLCB3ZWlnaHQ6IDI4LjA4NTUsIHN5bWJvbDogJ1NpJ30sXG4gIHtwb3NpdGlvbjogMTUsIG5hbWU6ICdQaG9zcGhvcnVzJywgd2VpZ2h0OiAzMC45NzM4LCBzeW1ib2w6ICdQJ30sXG4gIHtwb3NpdGlvbjogMTYsIG5hbWU6ICdTdWxmdXInLCB3ZWlnaHQ6IDMyLjA2NSwgc3ltYm9sOiAnUyd9LFxuICB7cG9zaXRpb246IDE3LCBuYW1lOiAnQ2hsb3JpbmUnLCB3ZWlnaHQ6IDM1LjQ1Mywgc3ltYm9sOiAnQ2wnfSxcbiAge3Bvc2l0aW9uOiAxOCwgbmFtZTogJ0FyZ29uJywgd2VpZ2h0OiAzOS45NDgsIHN5bWJvbDogJ0FyJ30sXG4gIHtwb3NpdGlvbjogMTksIG5hbWU6ICdQb3Rhc3NpdW0nLCB3ZWlnaHQ6IDM5LjA5ODMsIHN5bWJvbDogJ0snfSxcbiAge3Bvc2l0aW9uOiAyMCwgbmFtZTogJ0NhbGNpdW0nLCB3ZWlnaHQ6IDQwLjA3OCwgc3ltYm9sOiAnQ2EnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIERlZmF1bHQtZW5hYmxlZCBjb2x1bW4gcmVzaXplIHdpdGggYSBmbGV4LWJhc2VkIG1hdC10YWJsZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZmxleC1kZW1vJyxcbiAgdGVtcGxhdGVVcmw6ICdkZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1mbGV4LWRlbW8uaHRtbCcsXG4gIHN0eWxlVXJsczogWydkZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1mbGV4LWRlbW8uY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRmxleERlbW8ge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG59XG4iLCI8bWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejggZXhhbXBsZS10YWJsZVwiPlxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgW21hdFJlc2l6YWJsZU1heFdpZHRoUHhdPVwiMTAwXCI+IE5vLiA8L21hdC1oZWFkZXItY2VsbD5cbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L21hdC1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIFttYXRSZXNpemFibGVNaW5XaWR0aFB4XT1cIjE1MFwiPiBOYW1lIDwvbWF0LWhlYWRlci1jZWxsPlxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC9tYXQtY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIChub3QgcmVzaXphYmxlKSAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIGRpc2FibGVSZXNpemU+IFdlaWdodCAoTm90IHJlc2l6YWJsZSkgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvbWF0LWNlbGw+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvbWF0LWNlbGw+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvbWF0LWhlYWRlci1yb3c+XG4gIDxtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvbWF0LXJvdz5cbjwvbWF0LXRhYmxlPlxuIl19